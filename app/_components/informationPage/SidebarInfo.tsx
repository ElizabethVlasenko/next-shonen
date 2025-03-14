import React from "react";
import { AnimeInfo } from "../../_lib/graphql/types/anime";
import ContentContainer from "../ui/ContentContainer";
import { getTextColorForBG } from "../../_lib/helpers/color";
import { stringToSentenceCase } from "../../_lib/helpers/formatters/stringFormat";
import SidebarInfoConditionalData from "./SidebarInfoConditionalData";
import { format, formatDuration, intervalToDuration } from "date-fns";

type SidebarInfoProps = {
  anime: AnimeInfo;
};

export default function SidebarInfo({ anime }: SidebarInfoProps) {
  const animePrimaryColor = anime.coverImage.color || "#634fb7";
  const textColor = getTextColorForBG(animePrimaryColor);
  const mainStudio = anime.studios.edges?.filter((studio) => studio.isMain)[0];

  console.log(anime);

  return (
    <ContentContainer>
      {/* Genres */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Genres:</h3>
        <ul className="flex flex-wrap gap-2">
          {anime.genres &&
            anime.genres.map((genre) => (
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
      {/* Airing
          Ep 11: 21h 36m*/}
      <SidebarInfoConditionalData
        label="Airing"
        value={anime.nextAiringEpisode}
        format={(nextEpisode) =>
          `Ep ${nextEpisode.episode}: ${formatDuration(
            intervalToDuration({
              start: 0,
              end: nextEpisode.timeUntilAiring * 1000,
            }),
            {
              format: ["days", "hours", "minutes"],
            },
          )}`
        }
        linebreak
      />
      <div className="space-y-2">
        <SidebarInfoConditionalData
          label="Status"
          value={anime.status}
          format={(status) => stringToSentenceCase(status.replaceAll("_", " "))}
        />
        <SidebarInfoConditionalData label="Format" value={anime.format} />

        <SidebarInfoConditionalData label="Episodes" value={anime.episodes} />

        <SidebarInfoConditionalData
          label="Episode duration"
          value={anime.duration}
          format={(duration) =>
            formatDuration({
              hours: Math.floor(duration / 60),
              minutes: duration % 60,
            })
          }
        />

        <SidebarInfoConditionalData
          label="Start Date"
          value={format(
            new Date(
              anime.startDate.year,
              anime.startDate.month - 1,
              anime.startDate.day,
            ),
            "MMMM dd, yyyy",
          )}
          linebreak
        />

        <SidebarInfoConditionalData
          label="Season"
          value={anime.season}
          format={(season) =>
            stringToSentenceCase(season + " " + anime.seasonYear)
          }
          linebreak
        />

        <SidebarInfoConditionalData
          label="Rating"
          value={anime.averageScore}
          format={(averageScore) => averageScore + "/100"}
        />

        <SidebarInfoConditionalData
          label="Mean score"
          value={anime.meanScore}
          format={(meanScore) => meanScore + "/100"}
        />

        <SidebarInfoConditionalData
          label="Popularity"
          value={anime.popularity}
        />

        <SidebarInfoConditionalData
          label="Favorites"
          value={anime.favourites}
        />

        <SidebarInfoConditionalData
          label="Studios"
          value={mainStudio?.node.name}
          fallback="Unknown"
        />

        <SidebarInfoConditionalData
          label="Producers"
          value={anime.studios.edges}
          format={(studios) =>
            studios
              .filter((studio) => !studio.isMain)
              .map((studio) => studio.node.name)
              .join("\r\n")
          }
          linebreak
          paragraphClass="whitespace-pre-line"
        />

        <SidebarInfoConditionalData
          label="Source"
          value={anime.source}
          format={(source) => stringToSentenceCase(source.replaceAll("_", " "))}
        />

        {/* TODO: add a link on hashtags */}
        <SidebarInfoConditionalData
          label="Hashtag"
          value={anime.hashtag}
          linebreak
        />

        <SidebarInfoConditionalData
          label="Romaji"
          value={anime.title.romaji}
          linebreak
        />

        <SidebarInfoConditionalData
          label="English"
          value={anime.title.english}
          linebreak
        />

        <SidebarInfoConditionalData
          label="Native"
          value={anime.title.native}
          linebreak
        />

        <SidebarInfoConditionalData
          label="Synonyms"
          value={anime.synonyms}
          format={(synonyms) => synonyms.join(",\r\n")}
          linebreak
          paragraphClass="whitespace-pre-line"
        />
      </div>
    </ContentContainer>
  );
}
