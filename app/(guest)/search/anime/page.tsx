import SearchBar from "../../../_components/search/SearchBar";
import SearchCategoriesPreview from "../../../_components/search/SearchCategoriesPreview";
import SearchResultPreview from "../../../_components/search/SearchResultPreview";
import {
  fetchAnime,
  fetchAnimeTopChart,
} from "../../../_lib/graphql/fetchers/animeFetcher";
import { SearchResultAnimeMedia } from "../../../_lib/graphql/types/anime";

type PageProps = {
  searchParams?: { [key: string]: string | string[] };
};

export default async function page({ searchParams }: PageProps) {
  const currSearchParams = (await searchParams) || {};

  let searchResult: SearchResultAnimeMedia[] = [];
  if (Object.keys(currSearchParams).length !== 0) {
    //min 3 character search
    if (currSearchParams.search?.length < 3) {
      delete currSearchParams?.search;
    }
    console.log(currSearchParams);
    const searchResultData = await fetchAnime({
      isAdult: false,
      type: "ANIME",
      sort: ["POPULARITY_DESC"],
      page: 1,
      perPage: 20,
      ...currSearchParams,
    });
    searchResult = searchResultData.media;
  }

  const data = await fetchAnimeTopChart();

  const trendingNow = data.trending.media;
  const popularThisSeason = data.popularSeason.media;
  const popularNextSeason = data.popularNextSeason.media;
  const allTimePopular = data.allTimePopular.media;

  return (
    <div>
      <h1 className="pb-4 text-xl text-primary-800 dark:text-primary-50">
        TODO: Anime Search Bar
      </h1>
      <SearchBar />
      {Object.keys(currSearchParams).length === 0 ? (
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
      ) : (
        <SearchResultPreview results={searchResult} />
      )}
    </div>
  );
}
