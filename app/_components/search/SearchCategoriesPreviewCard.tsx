"use client";

import React, { useState } from "react";
import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";
import Image from "next/image";
import StatusTag from "../ui/StatusTag";
import AnimeAiringInfo from "./AnimeAiringInfo";

type SearchCategoriesPreviewCardProps = {
  anime: SearchResultAnimeMedia;
  index: number;
};

export default function SearchCategoriesPreviewCard({
  anime,
  index,
}: SearchCategoriesPreviewCardProps) {
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  let displayPositionStyles;

  if (index < 3) {
    displayPositionStyles =
      " rounded-r-lg pl-7 " +
      (isShowMoreInfo ? "-right-44 shadow-lg" : "right-0");
  } else {
    displayPositionStyles =
      " rounded-l-lg pr-7 " +
      (isShowMoreInfo ? "-left-44 shadow-lg" : "left-0");
  }

  return (
    <>
      <li
        className={`relative h-auto ${isShowMoreInfo ? "z-[3]" : ""}`}
        key={anime.id}
        onMouseEnter={() => setIsShowMoreInfo(true)}
        onMouseLeave={() => setIsShowMoreInfo(false)}
      >
        <div
          className={`absolute h-full w-48 rounded-lg bg-primary-50 p-3 ${displayPositionStyles} overflow-hidden`}
        >
          <AnimeAiringInfo
            nextAiringEpisode={anime.nextAiringEpisode}
            startDate={anime.startDate}
            endDate={anime.endDate}
          />
          <p>rating: {anime.averageScore}</p>

          <p>{anime.studios.edges[0]?.node.name}</p>

          <p>{anime.coverImage.color}</p>

          <p>
            {anime.format}
            {anime.episodes ? " | " + anime.episodes + " episodes" : ""}
          </p>

          <div className="flex flex-wrap gap-2">
            {anime.genres.slice(0, 3).map((genre) => (
              <span
                style={{ backgroundColor: anime.coverImage.color }}
                className={`text-bold block rounded-full px-3 py-1 font-serif text-sm text-white`}
                key={genre}
              >
                {genre}
              </span>
            ))}
          </div>
          {/* airing info, rating, company,  numbers of episodes, tags (action, comedy) */}
        </div>

        <div className="relative flex h-full w-48 min-w-48 flex-col items-center rounded-lg bg-primary-50 transition hover:shadow-lg dark:bg-primary-800">
          {/* background colored in anime specific color  */}
          <div
            style={{ backgroundColor: anime.coverImage.color }}
            className="absolute inset-0 rounded-lg opacity-60 brightness-125 dark:brightness-75"
          ></div>

          <div className="relative h-64 w-48 object-cover shadow-sm">
            <Image
              src={anime.coverImage.large}
              alt={anime.title.userPreferred}
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
          <h3 className="truncate-2-lines z-[1] mb-4 mt-3 flex-grow px-4 text-center text-base font-medium leading-5">
            {anime.title.userPreferred || anime.title.userPreferred}
          </h3>
          <StatusTag
            status={anime.status}
            className="*: absolute -left-1 -top-1 z-[2]"
          />
        </div>
      </li>
    </>
  );
}
