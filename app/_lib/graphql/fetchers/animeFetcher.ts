import client from "../apolloClient";
import { SEARCH_ANIME_QUERY } from "../queries/searchAnime";
import { type AnimeVariables } from "../types/anime";

export const fetchAnime = async (variables: AnimeVariables) => {
  try {
    const { data } = await client.query({
      query: SEARCH_ANIME_QUERY,
      variables,
    });
    return data.Page.media;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
