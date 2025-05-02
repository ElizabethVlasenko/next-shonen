import client from "../apolloClient";
import { GET_CHARACTER_BY_ANIME_ID } from "../queries/searchAnime";
import { fetchCharacterTitleByIdType } from "../types/character";

export const fetchCharacterTitleById = async (
  mediaId: string,
  page: number,
) => {
  try {
    const { data } = await client.query({
      query: GET_CHARACTER_BY_ANIME_ID,
      variables: {
        mediaId,
        page: 1,
        perPage: 25,
      },
      fetchPolicy: "cache-first",
    });

    console.log("mediaId", mediaId, "page", page);
    console.log(data);
    return data as fetchCharacterTitleByIdType;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
