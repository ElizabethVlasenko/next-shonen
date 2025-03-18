import React from "react";
import { type SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";
import AnimeAiringInfo from "./AnimeAiringInfo";
import { getTextColorForBG } from "../../_lib/helpers/color";
import { formatAnimeFormat } from "../../_lib/helpers/formatters/animeformat";

type CardMoreContentProps = {
  anime: SearchResultAnimeMedia;
};

export default function CardMoreContent({ anime }: CardMoreContentProps) {
  const animePrimaryColor = anime.coverImage.color || "#634fb7";
  const textColor = getTextColorForBG(animePrimaryColor);

  return (
    <>
      <p className="mb-1 text-base font-bold text-primary-800 md:text-sm dark:text-primary-50">
        <AnimeAiringInfo
          status={anime.status}
          nextAiringEpisode={anime.nextAiringEpisode}
          startDate={anime.startDate}
          endDate={anime.endDate}
          season={anime.season}
          seasonYear={anime.seasonYear}
        />
      </p>

      {anime.averageScore && (
        <p className="mb-2 text-sm text-primary-800 md:text-xs dark:text-primary-50">
          <span className="text-base font-bold">{anime.averageScore}</span>/100
        </p>
      )}

      {anime.studios.edges[0] && (
        <p className="truncate-2-lines mb-1 text-base leading-4 text-primary-800 md:text-sm dark:text-primary-50">
          {anime.studios.edges[0]?.node.name}
        </p>
      )}

      <p className="mb-2 text-base text-primary-800 md:text-sm dark:text-primary-50">
        {formatAnimeFormat(anime.format)}
        {anime.episodes ? " | " + anime.episodes + " episodes" : ""}
      </p>

      <div className="my-2 flex flex-wrap gap-2">
        {anime.genres.slice(0, 3).map((genre) => (
          <span
            style={{ backgroundColor: animePrimaryColor }}
            className={`block rounded-full px-3 py-1 font-sans text-base font-bold md:text-sm ${textColor} `}
            key={genre}
          >
            {genre}
          </span>
        ))}
      </div>
    </>
  );
}
