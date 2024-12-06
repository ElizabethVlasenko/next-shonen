import client from "../apolloClient";
import { SEARCH_ANIME_BY_ID } from "../queries/searchAnime";
import { SearchAnimeByIdVariables, Title } from "../types/anime";

export const fetchAnimeById = async (variables: SearchAnimeByIdVariables) => {
  try {
    const { data } = await client.query({
      query: SEARCH_ANIME_BY_ID,
      variables,
      fetchPolicy: "cache-first",
    });

    console.log("Data:", data.Page);
    console.log("Cache:", client.cache.extract());

    return data.Media.title as Title;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
