import Image from "next/image";
import React from "react";
import StatusTag from "../ui/StatusTag";
import { AnimeInfo } from "../../_lib/graphql/types/anime";

type CoverImageProps = {
  anime: AnimeInfo;
};

export default function CoverImage({ anime }: CoverImageProps) {
  return (
    <div className="relative flex-shrink-0">
      <Image
        src={anime.coverImage.extraLarge}
        alt={anime.title.english || anime.title.native}
        width={300}
        height={450}
        style={{ height: "450px", width: "300px" }}
        className="select-none rounded-lg object-cover shadow-md"
      />
      <StatusTag
        type="tag"
        status={anime.status}
        className="absolute right-2 top-2 z-[2]"
      />
    </div>
  );
}
