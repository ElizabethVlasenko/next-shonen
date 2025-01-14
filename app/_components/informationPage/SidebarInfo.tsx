import React from "react";
import { AnimeInfo } from "../../_lib/graphql/types/anime";
import ContentContainer from "../ui/ContentContainer";
import { getTextColorForBG } from "../../_lib/helpers/color";
import { stringToSentenceCase } from "../../_lib/helpers/formatters/stringFormat";

type SidebarInfoProps = {
  anime: AnimeInfo;
};

export default function SidebarInfo({ anime }: SidebarInfoProps) {
  const animePrimaryColor = anime.coverImage.color || "#634fb7";
  const textColor = getTextColorForBG(animePrimaryColor);

  return (
    <ContentContainer>
      {/* Genres */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Genres:</h3>
        <ul className="flex flex-wrap gap-2">
          {anime.genres.map((genre) => (
            <span
              style={{ backgroundColor: animePrimaryColor }}
              className={`block rounded-full px-3 py-1 font-sans text-sm font-bold ${textColor} `}
              key={genre}
            >
              {genre}
            </span>
          ))}
        </ul>
      </div>

      {/* Additional Info */}
      <div className="space-y-2">
        <p>
          <strong className="normal-case">Status:</strong>{" "}
          {stringToSentenceCase(anime.status.replaceAll("_", " "))}
        </p>
        <p>
          <strong>Episodes:</strong> {anime.episodes}
        </p>
        {anime.averageScore && (
          <p>
            <strong>Rating:</strong> {anime.averageScore}/100
          </p>
        )}
        <p>
          <strong>Studio:</strong>{" "}
          {anime.studios.edges[0].node.name || "Unknown"}
        </p>
        <p className="whitespace-pre">
          <strong>Producers:</strong>
          <br />
          {anime.studios.edges
            .slice(1)
            .map((studio) => studio.node.name)
            .join("\r\n")}
        </p>
      </div>
    </ContentContainer>
  );
}
