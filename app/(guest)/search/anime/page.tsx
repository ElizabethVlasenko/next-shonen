import SearchCategoriesPreview from "../../../_components/search/SearchCategoriesPreview";
import { fetchAnime } from "../../../_lib/graphql/fetchers/animeFetcher";
import { SearchAnimeVariables } from "../../../_lib/graphql/types/anime";

export default async function page() {
  const variables: SearchAnimeVariables = {
    isAdult: false,
    type: "ANIME",
    sort: ["TRENDING_DESC"],
    page: 1,
    perPage: 5,
  };

  const data = await fetchAnime(variables);

  const trendingNow = data.media;

  return (
    <div>
      <h1 className="pb-4 text-primary-800">Anime Search Bar</h1>
      <SearchCategoriesPreview
        title="Trending now"
        href={"/search/anime/trending"}
        results={trendingNow}
      />
    </div>
  );
}
