import React from "react";
import { AnimeInfo } from "../../_lib/graphql/types/anime";
import Image from "next/image";

type BannerProps = {
  anime: AnimeInfo;
};

export default function Banner({ anime }: BannerProps) {
  const hasBanner = anime.bannerImage !== null;
  return (
    <div className="relative h-60 w-full overflow-hidden rounded-lg md:h-80 lg:h-96">
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 to-transparent"></div>
      {hasBanner ? (
        <Image
          src={anime.bannerImage}
          alt={`${anime.title.english || anime.title.native} banner`}
          priority
          fill
          className="select-none object-cover object-center"
        />
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: anime.coverImage.color || "#1E293B",
          }}
        ></div>
      )}
      <div className="absolute bottom-0 left-0 z-[2] p-8 pb-7 text-white">
        <h1 className="text-2xl font-bold md:text-4xl">
          {anime.title.english || anime.title.romaji}
        </h1>
        <p className="mt-1 text-sm italic md:text-base">
          {anime.title.romaji !== anime.title.native && anime.title.romaji && (
            <>
              {anime.title.romaji}
              {anime.title.romaji.length > 50 ? <br /> : ", "}
            </>
          )}
          {anime.title.native}
        </p>
      </div>
    </div>
  );
}
