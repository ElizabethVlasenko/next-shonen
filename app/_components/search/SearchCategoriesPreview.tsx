import Link from "next/link";
import { SearchResultAnimeMedia } from "../../_lib/graphql/types/anime";
import SearchCategoriesPreviewCard from "./SearchCategoriesPreviewCard";

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
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link href={href}>View all</Link>
      </div>
      {/* Category list of anime/manga titles (5 per category)*/}
      <ul className="relative flex justify-between gap-6">
        {results.slice(0, number).map((anime) => (
          <SearchCategoriesPreviewCard key={anime.id} anime={anime} />
        ))}
      </ul>
    </div>
  );
}
