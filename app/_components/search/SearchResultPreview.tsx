"use client";

import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";

import SearchPreviewCard from "./SearchCategoriesPreviewCard";
import { fetchAnime } from "../../_lib/graphql/fetchers/animeFetcher";
import useInfiniteScroll from "../../_lib/hooks/useInfiniteScroll";

type SearchResultPreviewProps = {
  initialResults: SearchResultAnimeMedia[];
  searchParams?: { [key: string]: string | string[] };
};

export default function SearchResultPreview({
  initialResults,
  searchParams,
}: SearchResultPreviewProps) {
  console.log(searchParams, "search params");
  console.log(initialResults, "initial results");
  const fetchAnimeData = async (page: number) => {
    const response = await fetchAnime({
      isAdult: false,
      type: "ANIME",
      sort: ["POPULARITY_DESC"],
      page,
      perPage: 20,
      ...searchParams,
    });

    return response.media;
  };

  const {
    data: results,
    loading,
    observerRef,
  } = useInfiniteScroll({
    initialResults,
    fetchFn: fetchAnimeData,
  });

  return (
    <div className="rounded-lg bg-white p-8 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
      <ul className="relative flex flex-wrap justify-start gap-6 gap-x-8">
        {results.map((anime) => (
          <SearchPreviewCard key={anime.id} anime={anime} />
        ))}
      </ul>
      {loading && (
        <div className="h-10 w-full text-center">
          <p className="mt-8 text-center">Loading more...</p>
        </div>
      )}
      <div ref={observerRef} className="w-full" />
    </div>
  );
}
