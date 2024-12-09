import { add, compareAsc, formatDistanceToNow } from "date-fns";
import {
  MediaSeason,
  MediaStatus,
  type DateYMD,
  type NextAiringEpisode,
} from "../../_lib/graphql/types/anime";

type AnimeAiringInfoProps = {
  nextAiringEpisode: NextAiringEpisode;
  startDate: DateYMD;
  endDate: DateYMD;
  season: MediaSeason;
  seasonYear: number;
  status: MediaStatus;
};

export default function AnimeAiringInfo({
  nextAiringEpisode,
  startDate,
  endDate,
  season,
  seasonYear,
  status,
}: AnimeAiringInfoProps) {
  // finished or airing without nextAiringEpisode and endDate year
  if (nextAiringEpisode === null && status !== "NOT_YET_RELEASED") {
    if (!endDate.year) {
      return <>Airing since {startDate.year}</>;
    }
    return (
      <>
        {startDate.year} - {endDate.year}
      </>
    );
  }

  //airing (there is next episode date)
  if (nextAiringEpisode) {
    //airing date of the next episode
    const airingDate = add(new Date(), {
      seconds: nextAiringEpisode.timeUntilAiring,
    });

    //will show the countdown id the date is earlier than visibleAiringDate
    const visibleAiringDate = add(new Date(), {
      weeks: 2,
    });

    //the next airing episode is after visibleAiringDate
    if (compareAsc(visibleAiringDate, airingDate) !== 1) {
      //Compare the two dates and return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal.

      if (nextAiringEpisode.episode !== 1) {
        //if the next episode is not the first one and the anime is still airing
        return <>Airing</>;
      }

      // return season and season year if the anime's first episode is airing after visibleAiringDate
      return (
        <>
          {season} {seasonYear}
        </>
      );
    }

    // in any other cases returns countdown to the next episode
    return (
      <>
        Episode {nextAiringEpisode.episode}{" "}
        {formatDistanceToNow(airingDate, {
          addSuffix: true,
        })}
      </>
    );
  }
}
