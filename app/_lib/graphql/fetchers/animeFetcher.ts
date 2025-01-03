import { add } from "date-fns";
import { getSeasonOfTheDate } from "../../helpers/date";
import client from "../apolloClient";
import { SEARCH_ANIME, SEARCH_ANIME_TOP_CHART } from "../queries/searchAnime";
import {
  SearchAnimeTopChart,
  SearchAnimeVariables,
  SearchResultAnime,
} from "../types/anime";

export const fetchAnime = async (variables: SearchAnimeVariables) => {
  try {
    const { data } = await client.query({
      query: SEARCH_ANIME,
      variables,
      fetchPolicy: "cache-first",
    });

    // console.log("Data:", data.Page);
    // console.log("Cache:", client.cache.extract());

    return data.Page as SearchResultAnime;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};

export const fetchAnimeTopChart = async () => {
  const currentSeason = getSeasonOfTheDate(new Date());
  let nextSeasonYear = new Date().getFullYear();
  if (currentSeason === "FALL") {
    nextSeasonYear += 1;
  }
  const nextSeason = getSeasonOfTheDate(add(new Date(), { months: 3 }));

  // console.log(
  //   "current season: " + currentSeason + " " + new Date().getFullYear(),
  // );
  // console.log("next season: " + nextSeason + " " + nextSeasonYear);

  try {
    const { data } = await client.query({
      query: SEARCH_ANIME_TOP_CHART,
      variables: {
        season: currentSeason,
        nextSeason: nextSeason,
        nextSeasonYear: nextSeasonYear,
        seasonYear: new Date().getFullYear(),
      },
      fetchPolicy: "cache-first",
    });

    return data as SearchAnimeTopChart;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
