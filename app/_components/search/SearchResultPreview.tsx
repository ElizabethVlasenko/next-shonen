"use client";

import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";

import SearchPreviewCard from "./SearchCategoriesPreviewCard";

type SearchResultPreviewProps = {
  results: SearchResultAnimeMedia[];
};

export default function SearchResultPreview({
  results,
}: SearchResultPreviewProps) {
  return (
    <div className="rounded-lg bg-white p-8 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
      <ul className="relative flex flex-wrap justify-between gap-6">
        {results.map((anime) => (
          <SearchPreviewCard key={anime.id} anime={anime} />
        ))}
      </ul>
    </div>
  );
}
