import { MediaFormat } from "../../graphql/types/anime";

export function formatAnimeFormat(format: MediaFormat) {
  switch (format) {
    case "TV":
      return "TV show";
    case "TV_SHORT":
      return "TV short";
    case "MOVIE":
      return "Movie";
    case "SPECIAL":
      return "Special";
    case "OVA":
      return "OVA";
    case "ONA":
      return "ONA";
    case "MUSIC":
      return "Music";
    case "MANGA":
      return "Manga";
    case "NOVEL":
      return "Novel";
    case "ONE_SHOT":
      return "One shot";
    default:
      return "";
  }
}
