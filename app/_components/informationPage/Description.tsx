"use client";

import React, { useEffect, useRef, useState } from "react";
import ContentContainer from "../ui/ContentContainer";
import { AnimeInfo } from "../../_lib/graphql/types/anime";

type DescriptionProps = {
  anime: AnimeInfo;
};

export default function Description({ anime }: DescriptionProps) {
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) setHeight(containerRef.current.clientHeight || 0);
  }, []);

  return (
    <ContentContainer
      ref={containerRef}
      className={`${showMore ? "max-h-max" : "max-h-[450px]"} overflow-hidden`}
    >
      <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
      {height > 449 && (
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-100 to-transparent py-1 text-center font-bold text-primary-800 transition-all dark:from-primary-600 dark:text-primary-50"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </ContentContainer>
  );
}
