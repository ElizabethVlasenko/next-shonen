"use client";

import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";
import Button from "../ui/Button";
import ContentContainer from "../ui/ContentContainer";
import SearchPreviewCard from "./SearchCategoriesPreviewCard";

type SearchCategoriesPreviewProps = {
  title: string;
  href: string;
  number: number; //number of shown entries
  results: SearchResultAnimeMedia[];
};

export default function SearchCategoriesPreview({
  title,
  href,
  results,
  number,
}: SearchCategoriesPreviewProps) {
  return (
    <ContentContainer>
      {/* Category title */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{title} </h2>
        {/* TODO: custom link component */}
        <Button variant="link" size="sm" href={href}>
          View All
        </Button>
      </div>
      {/* Category list of anime/manga titles (5 per category)*/}
      <ul className="relative flex justify-between gap-6">
        {results.slice(0, number).map((anime) => (
          <SearchPreviewCard key={anime.id} anime={anime} />
        ))}
      </ul>
    </ContentContainer>
  );
}
