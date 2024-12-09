import SearchCategoriesPreview from "../../../_components/search/SearchCategoriesPreview";
import { fetchAnimeTopChart } from "../../../_lib/graphql/fetchers/animeFetcher";

export default async function page() {
  // const variables: SearchAnimeVariables = {
  //   isAdult: false,
  //   type: "ANIME",
  //   sort: ["TRENDING_DESC"],
  //   page: 1,
  //   perPage: 5,
  // };

  // const data = await fetchAnime(variables);

  const data = await fetchAnimeTopChart();

  console.log(data);

  const trendingNow = data.trending.media;
  const popularThisSeason = data.popularSeason.media;
  const popularNextSeason = data.popularNextSeason.media;
  const allTimePopular = data.allTimePopular.media;

  return (
    <div>
      <h1 className="pb-4 text-xl text-primary-800">TODO: Anime Search Bar</h1>
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
