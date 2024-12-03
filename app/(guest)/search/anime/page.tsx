import { fetchAnime } from "../../../_lib/graphql/fetchers/animeFetcher";
import { SearchAnimeVariables } from "../../../_lib/graphql/types/anime";

export default async function page() {
  const variables: SearchAnimeVariables = {
    isAdult: false,
    sort: ["TRENDING_DESC"],
    page: 1,
  };

  const data = await fetchAnime(variables);

  const animeList = data.media;

  return (
    <div>
      <h1 className="text-primary-800">Anime Search Results</h1>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <h2 className="text-primary-800">
              {anime.title.userPreferred || anime.title.userPreferred}
            </h2>
            <img src={anime.coverImage.large} alt={anime.title.userPreferred} />
          </li>
        ))}
      </ul>
    </div>
  );
}
