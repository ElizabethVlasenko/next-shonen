import client from "../apolloClient";
import {
  SEARCH_ANIME_BY_ID,
  SEARCH_ANIME_TITLE_BY_ID,
} from "../queries/searchAnime";
import { AnimeInfo, SearchAnimeByIdVariables, Title } from "../types/anime";

export const fetchAnimeById = async (variables: SearchAnimeByIdVariables) => {
  try {
    const { data } = await client.query({
      query: SEARCH_ANIME_BY_ID,
      variables,
      fetchPolicy: "cache-first",
    });

    return data.Media as AnimeInfo;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};

export const fetchAnimeTitleById = async (
  variables: SearchAnimeByIdVariables,
) => {
  try {
    const { data } = await client.query({
      query: SEARCH_ANIME_TITLE_BY_ID,
      variables,
      fetchPolicy: "cache-first",
    });

    return data.Media.title as Title;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
