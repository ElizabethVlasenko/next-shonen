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
      <p className="mb-2 text-sm font-bold text-primary-800 dark:text-primary-300">
        {anime.nextAiringEpisode ? (
          <AnimeAiringInfo
            status={anime.status}
            nextAiringEpisode={anime.nextAiringEpisode}
            startDate={anime.startDate}
            endDate={anime.endDate}
            season={anime.season}
            seasonYear={anime.seasonYear}
          />
        ) : (
          anime.season + " " + anime.seasonYear
        )}
      </p>

      {anime.averageScore && (
        <p className="mb-2 text-sm font-bold text-primary-800 dark:text-primary-300">
          {anime.averageScore}%
        </p>
      )}

      <p className="text-sm leading-3 text-primary-800 dark:text-primary-300">
        {anime.studios.edges[0]?.node.name}
      </p>

      <p className="mb-2 text-sm text-primary-800 dark:text-primary-300">
        {formatAnimeFormat(anime.format)}
        {anime.episodes ? " | " + anime.episodes + " episodes" : ""}
      </p>

      <div className="my-2 flex flex-wrap gap-2">
        {anime.genres.slice(0, 3).map((genre) => (
          <span
            style={{ backgroundColor: animePrimaryColor }}
            className={`block rounded-full px-3 py-1 font-sans text-sm font-bold ${textColor} `}
            key={genre}
          >
            {genre}
          </span>
        ))}
      </div>
    </>
  );
}
