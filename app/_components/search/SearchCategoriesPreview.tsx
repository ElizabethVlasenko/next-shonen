"use client";

import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";
import Button from "../ui/Button";
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
    <div className="rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
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
    </div>
  );
}
