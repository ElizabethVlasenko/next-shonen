import React from "react";
import { fetchAnimeById } from "../../../../_lib/graphql/fetchers/animeFetcherById";
import Image from "next/image";
import { getTextColorForBG } from "../../../../_lib/helpers/color";
import StatusTag from "../../../../_components/ui/StatusTag";
import ContentContainer from "../../../../_components/ui/ContentContainer";

type PageProps = {
  params: { id: string; slug: string };
};

export default async function page({ params }: PageProps) {
  const itemId = (await params).id;
  const anime = await fetchAnimeById({ mediaId: +itemId });
  const animePrimaryColor = anime.coverImage.color || "#634fb7";
  const textColor = getTextColorForBG(animePrimaryColor);
  const hasBanner = anime.bannerImage !== null;

  console.log(anime);

  return (
    <div>
      {/* Banner */}
      <div className="relative h-60 w-full overflow-hidden rounded-lg md:h-80 lg:h-96">
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 to-transparent"></div>
        {hasBanner ? (
          <Image
            src={anime.bannerImage}
            alt={`${anime.title.english || anime.title.native} banner`}
            layout="fill"
            objectFit="cover"
            priority
            className="select-none"
          />
        ) : (
          <div
            className="absolute inset-0 z-0"
            style={{
              background: anime.coverImage.color || "#1E293B",
            }}
          ></div>
        )}
        <div className="absolute bottom-4 left-4 z-[2] text-white">
          <h1 className="text-2xl font-bold md:text-4xl">
            {anime.title.english || anime.title.romaji}
          </h1>
          <p className="mt-1 text-sm italic md:text-base">
            {anime.title.romaji ? anime.title.romaji + "," : null}{" "}
            {anime.title.native}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 flex flex-col gap-6 lg:grid lg:grid-cols-[300px,1fr]">
        {/* Cover Image */}
        <div className="relative flex-shrink-0">
          <Image
            src={anime.coverImage.extraLarge}
            alt={anime.title.english || anime.title.native}
            width={300}
            height={450}
            className="select-none rounded-lg shadow-md"
          />
          <StatusTag
            type="tag"
            status={anime.status}
            className="absolute right-2 top-2 z-[2]"
          />
        </div>

        {/* Anime Details */}
        <ContentContainer>
          <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
        </ContentContainer>

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
            <p className="lowercase">
              <strong className="normal-case">Status:</strong> {anime.status}
            </p>
            <p>
              <strong>Episodes:</strong> {anime.episodes || "N/A"}
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
      </div>
    </div>
  );
}
