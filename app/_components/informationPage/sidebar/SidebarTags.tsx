"use client";

import React, { useState } from "react";
import { Tag } from "../../../_lib/graphql/types/anime";
import ContentContainer from "../../ui/ContentContainer";
import Button from "../../ui/Button";

type SidebarTagsProps = {
  tags: Tag[];
};

export default function SidebarTags({ tags }: SidebarTagsProps) {
  const [showAll, setShowAll] = useState<boolean>(false);

  const renderedTags = showAll
    ? tags
    : tags.filter((tag) => !tag.isMediaSpoiler);

  //TODO: Add links to tags
  return (
    <ContentContainer>
      <ul className="space-y-2">
        {renderedTags.map((tag) => (
          <li key={tag.id} className="flex w-full justify-between gap-4">
            <p
              className={`text-sm ${tag.isMediaSpoiler ? "font-bold text-red-600" : ""}`}
            >
              {tag.name}
            </p>
            <p
              className={`text-sm ${tag.isMediaSpoiler ? "font-bold text-red-600" : ""}`}
            >
              {tag.rank}%
            </p>
          </li>
        ))}
      </ul>
      <Button
        variant="secondaryPurple"
        onClick={() => setShowAll(!showAll)}
        className="mt-5 w-full"
      >
        {showAll ? "Hide spoiler tags" : "Show spoiler tags"}
      </Button>
    </ContentContainer>
  );
}
