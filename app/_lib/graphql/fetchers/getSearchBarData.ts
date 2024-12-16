import client from "../apolloClient";
import { SEARCH_BAR_DATA } from "../queries/searchBarData";
import { SearchBarData } from "../types/search";

export const getSearchBarData = async () => {
  try {
    const { data } = await client.query({
      query: SEARCH_BAR_DATA,
      fetchPolicy: "cache-first",
    });

    // console.log("Data:", data);
    // console.log("Cache:", client.cache.extract());

    return data as SearchBarData;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
