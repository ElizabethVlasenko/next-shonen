import { type Metadata } from "next";
import SearchCategoriesPreview from "../_components/search/SearchCategoriesPreview";
import SearchBar from "../_components/search/SearchBar";
import { fetchAnimeTopChart } from "../_lib/graphql/fetchers/animeFetcher";
import Button from "../_components/ui/Button";
import Image from "next/image";
import { type SearchAnimeTopChart } from "../_lib/graphql/types/anime";

export const metadata: Metadata = {
  title: "NextShōnen: Track, Discover, Share Anime & Manga",
  description:
    "Discover and track your favorite anime effortlessly with our sleek and modern platform. ",
};

type PageProps = {
  searchParams?: { [key: string]: string | string[] };
};

export default async function Home({ searchParams }: PageProps) {
  const data = (await fetchAnimeTopChart()) as SearchAnimeTopChart;
  const currSearchParams = (await searchParams) || {};
  console.log("search params", currSearchParams);
  if (Object.keys(currSearchParams).length === 0)
    console.log("search is empty");
  // console.log(data);

  const trendingNow = data.trending.media;
  const popularThisSeason = data.popularSeason.media;
  const popularNextSeason = data.popularNextSeason.media;
  const allTimePopular = data.allTimePopular.media;

  return (
    <div className="text-primary-700 dark:text-white">
      <section className="relative mb-8 rounded-lg bg-gradient-to-r from-primary-800 to-primary-600 px-8 py-16 pt-14 text-center text-white shadow-md">
        <Image
          className="absolute bottom-0 right-8 h-72 w-auto"
          src="/Satoru-Gojo-v.png"
          width={150}
          height={300}
          alt="Anime intro image of Gojo Satoru"
        />
        <div className="mx-auto max-w-lg">
          <h1 className="mb-4 text-4xl font-bold">
            Dive Into the World of Anime
          </h1>
          <p className="mb-6 text-lg">
            Explore, track, and discover your favorite anime like never before.
            Join a community of anime enthusiasts and create your personalized
            anime journey today.
          </p>
          <Button variant="primaryReverse" href="/signup">
            Sign Up Now
          </Button>
        </div>
      </section>

      <SearchBar />
      <div className="space-y-8">
        <SearchCategoriesPreview
          number={5}
          title="Trending now"
          href={"/search/anime/trending"}
          results={trendingNow}
        />

        <SearchCategoriesPreview
          number={5}
          title="Popular this season"
          href={"/search/anime/this-season"}
          results={popularThisSeason}
        />

        <SearchCategoriesPreview
          number={5}
          title="Upcoming next season"
          href={"/search/anime/next-season"}
          results={popularNextSeason}
        />

        <SearchCategoriesPreview
          number={5}
          title="All time popular"
          href={"/search/anime/popular"}
          results={allTimePopular}
        />
      </div>
    </div>
  );
}
