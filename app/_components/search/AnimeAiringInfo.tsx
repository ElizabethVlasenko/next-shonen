import { add, formatDistanceToNow } from "date-fns";
import {
  type DateYMD,
  type NextAiringEpisode,
} from "../../_lib/graphql/types/anime";

type AnimeAiringInfoProps = {
  nextAiringEpisode: NextAiringEpisode;
  startDate: DateYMD;
  endDate: DateYMD;
};

export default function AnimeAiringInfo({
  nextAiringEpisode,
  startDate,
  endDate,
}: AnimeAiringInfoProps) {
  if (nextAiringEpisode === null) {
    if (!endDate.year) {
      return <p>Airing since {startDate.year}</p>;
    }
    return (
      <p>
        {startDate.year} - {endDate.year}
      </p>
    );
  }
  if (nextAiringEpisode) {
    const airingDate = add(new Date(), {
      seconds: nextAiringEpisode.timeUntilAiring,
    });

    return (
      <p>
        Episode {nextAiringEpisode.episode}{" "}
        {formatDistanceToNow(airingDate, {
          addSuffix: true,
        })}
      </p>
    );
  }
}
