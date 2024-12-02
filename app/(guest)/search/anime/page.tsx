import { fetchAnime } from "../../../_lib/graphql/fetchers/animeFetcher";

export default async function page() {
  const variables = {
    search: "Jujutsu",
    page: 1,
    perPage: 3,
  };

  const animeList = await fetchAnime(variables);

  return (
    <div>
      <h1 className="text-primary-800">Anime Search Results</h1>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <h2 className="text-primary-800">
              {anime.title.english || anime.title.romaji}
            </h2>
            <img src={anime.coverImage.large} alt={anime.title.romaji} />
          </li>
        ))}
      </ul>
    </div>
  );
}
