"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimeInfo } from "../../../_lib/graphql/types/anime";
import Button from "../../ui/Button";
import ContentContainer from "../../ui/ContentContainer";

type StaffListProps = {
  anime: AnimeInfo;
};

const STAFF_SHORT_LIST_LENGTH = 6;

export default function StaffList({ anime }: StaffListProps) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const numRelation = anime.staffPreview.edges.length;

  console.log(anime.staffPreview, "anime in staffPreview");

  return (
    <ContentContainer>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Staff: </h2>
      </div>

      <ul className="grid grid-cols-2 gap-5">
        {anime.staffPreview.edges
          .slice(0, showAll ? numRelation : STAFF_SHORT_LIST_LENGTH)
          .map((staff) => (
            <li
              key={staff.id}
              className="flex gap-4 rounded-lg bg-primary-50/35 dark:bg-primary-800/40"
            >
              <div
                style={{ aspectRatio: "60 / 90" }}
                className="relative aspect-[60/90] h-[90px] w-[60px]"
              >
                <Image
                  key={staff.node.id}
                  src={staff.node.image.medium}
                  alt={staff.node.name.full}
                  fill
                  className="relative rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 py-2">
                <span>{staff.node.name.full}</span>
                <span className="text-xs">{staff.role}</span>
              </div>
            </li>
          ))}
      </ul>
      {numRelation > STAFF_SHORT_LIST_LENGTH && (
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
