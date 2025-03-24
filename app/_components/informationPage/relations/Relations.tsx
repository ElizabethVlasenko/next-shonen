"use client";

import { useState } from "react";
import { AnimeInfo } from "../../../_lib/graphql/types/anime";
import ContentContainer from "../../ui/ContentContainer";
import Button from "../../ui/Button";
import Image from "next/image";
import { stringToSentenceCase } from "../../../_lib/helpers/formatters/stringFormat";

type CharactersProps = {
  anime: AnimeInfo;
};

const RELATIONS_SHORT_LIST_LENGTH = 6;

export default function Relations({ anime }: CharactersProps) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const numRelation = anime.relations.edges.length;

  console.log(anime.relations, "anime in relations");

  return (
    <ContentContainer>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Relations: </h2>
      </div>

      <ul className="grid grid-cols-2 gap-5">
        {anime.relations.edges
          .slice(0, showAll ? numRelation : RELATIONS_SHORT_LIST_LENGTH)
          .map((relation) => (
            <li
              key={relation.node.id}
              className="flex gap-4 rounded-lg bg-primary-50/35 dark:bg-primary-800/40"
            >
              <div
                style={{ aspectRatio: "60 / 90" }}
                className="relative aspect-[60/90] h-[90px] w-[60px]"
              >
                <Image
                  key={relation.node.id}
                  src={relation.node.coverImage.large}
                  alt={
                    relation.node.title.english ?? relation.node.title.native
                  }
                  fill
                  className="relative rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 py-2">
                <p className="block w-fit rounded-lg bg-primary-500 px-2 py-1 text-xs text-white">
                  {stringToSentenceCase(relation.relationType).replace(
                    "_",
                    " ",
                  )}
                </p>
                <p className="truncate-1-line font-bold leading-none">
                  {relation.node.title.english ?? relation.node.title.native}
                </p>
                <p className="text-sm">
                  {relation.node.format} -{" "}
                  {stringToSentenceCase(relation.node.status)}
                </p>
              </div>
            </li>
          ))}
      </ul>
      {numRelation > RELATIONS_SHORT_LIST_LENGTH && (
        <Button
          variant="secondaryPurple"
          onClick={() => setShowAll(!showAll)}
          className="mt-5 w-full"
        >
          {showAll ? "Show less" : "Show more"}
        </Button>
      )}
    </ContentContainer>
  );
}
