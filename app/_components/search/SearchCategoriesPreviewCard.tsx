"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";
import StatusTag from "../ui/StatusTag";
import CardMoreContent from "./CardMoreContent";
import { generateSlug } from "../../_lib/helpers/slugGenerator";
import Color from "color";

type SearchPreviewCardProps = {
  anime: SearchResultAnimeMedia;
};

export default function SearchPreviewCard({ anime }: SearchPreviewCardProps) {
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);

  //background color adjustments
  const animePrimaryColor = Color(anime.coverImage.color || "#634fb7");
  let bgBrightness = "";

  if (animePrimaryColor.luminosity() < 0.5) {
    bgBrightness = "brightness-125";
  }

  if (animePrimaryColor.luminosity() < 0.25) {
    bgBrightness = "brightness-150";
  }

  if (animePrimaryColor.luminosity() < 0.1) {
    bgBrightness = "brightness-200";
  }

  return (
    <Link
      href={`/anime/${anime.id}/${generateSlug(anime.title.english || anime.title.romaji)}`}
    >
      <li
        className={`relative h-auto rounded-lg shadow-[0px_0px_15px_0px_rgba(0,_0,_0,_0.1)] transition-all duration-300 ease-in-out`}
        key={anime.id}
        onMouseEnter={() => setIsShowMoreInfo(true)}
        onMouseLeave={() => setIsShowMoreInfo(false)}
      >
        <div className="relative flex h-full flex-col items-center overflow-hidden rounded-lg transition hover:shadow-lg md:w-48 md:min-w-48">
          {/* image */}
          <div className="relative mb-14 h-96 w-full object-cover shadow-sm md:h-64 md:w-48">
            <Image
              src={anime.coverImage.large}
              alt={anime.title.english || anime.title.romaji}
              sizes="(min-width: 768px) 20rem"
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
          <div
            className={`absolute bottom-0 w-full rounded-lg bg-white p-4 px-5 pt-3 transition-all duration-300 ease-in-out dark:bg-black ${isShowMoreInfo ? "h-[27.5rem] md:h-[19.5rem]" : "h-16"}`}
          >
            {/* background colored in anime primary color */}
            <div
              style={{ backgroundColor: anime.coverImage.color || "#8173C6" }}
              className={`absolute inset-0 size-full rounded-lg opacity-60 md:w-48 dark:brightness-75 ${bgBrightness}`}
            ></div>
            <div className="relative">
              <h3
                className={`grow text-center text-xl font-medium md:text-lg md:leading-5 ${isShowMoreInfo ? "truncate-3-lines mb-4" : "truncate-2-lines"}`}
              >
                {anime.title.english || anime.title.romaji}
              </h3>
              {isShowMoreInfo && <CardMoreContent anime={anime} />}
            </div>
          </div>
        </div>

        <StatusTag
          status={anime.status}
          className="absolute -left-1 -top-1 z-[2]"
        />
      </li>
    </Link>
  );
}
