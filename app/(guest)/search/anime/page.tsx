import SearchBar from "../../../_components/search/SearchBar";
import SearchCategoriesPreview from "../../../_components/search/SearchCategoriesPreview";
import SearchNoResultPreview from "../../../_components/search/SearchNoResultPreview";
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

  const hasSearchParams = Object.keys(currSearchParams).length !== 0;
  const hasSearchResults = searchResult.length > 0;

  const trendingNow = data.trending.media;
  const popularThisSeason = data.popularSeason.media;
  const popularNextSeason = data.popularNextSeason.media;
  const allTimePopular = data.allTimePopular.media;

  return (
    <div>
      <SearchBar />
      {hasSearchParams && !hasSearchResults ? (
        <SearchNoResultPreview />
      ) : hasSearchParams ? (
        <SearchResultPreview
          initialResults={searchResult}
          searchParams={currSearchParams}
          key={JSON.stringify(currSearchParams)}
        />
      ) : (
        <div className="space-y-8">
          <SearchCategoriesPreview
            number={5}
            title="Trending now"
            href={"/search/anime/trending"}
            results={trendingNow}
            id="trending-now"
          />

          <SearchCategoriesPreview
            number={5}
            title="Popular this season"
            href={"/search/anime/this-season"}
            results={popularThisSeason}
            id="popular-this-season"
          />

          <SearchCategoriesPreview
            number={5}
            title="Upcoming next season"
            href={"/search/anime/next-season"}
            results={popularNextSeason}
            id="upcoming-next-season"
          />

          <SearchCategoriesPreview
            number={5}
            title="All time popular"
            href={"/search/anime/popular"}
            results={allTimePopular}
            id="all-time-popular"
          />
        </div>
      )}
    </div>
  );
}
