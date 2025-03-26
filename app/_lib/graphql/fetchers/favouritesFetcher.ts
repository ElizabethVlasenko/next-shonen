import client from "../apolloClient";
import { SEARCH_FAVOURITES_BY_USER_ID } from "../queries/searchFavourites";
import { SearchResultFavouritesByUserId } from "../types/user";

export const fetchFavouritesByUserId = async (userId: string) => {
  try {
    const { data } = await client.query({
      query: SEARCH_FAVOURITES_BY_USER_ID,
      variables: {
        name: userId,
      },
      fetchPolicy: "cache-first",
    });

    console.log("Data:", data);
    // console.log("Cache:", client.cache.extract());

    return data as SearchResultFavouritesByUserId;
  } catch (error) {
    console.error(`Error fetching ${userId} favorites:`, error);
    throw error;
  }
};
