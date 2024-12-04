import client from "../apolloClient";
import { SEARCH_ANIME } from "../queries/searchAnime";
import { SearchAnimeVariables, SearchResultAnime } from "../types/anime";

export const fetchAnime = async (variables: SearchAnimeVariables) => {
  try {
    const { data } = await client.query({
      query: SEARCH_ANIME,
      variables,
      fetchPolicy: "cache-first",
    });

    console.log("Data:", data.Page);
    console.log("Cache:", client.cache.extract());

    return data.Page as SearchResultAnime;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
