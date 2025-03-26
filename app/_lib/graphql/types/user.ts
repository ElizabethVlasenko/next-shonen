import { Character, coverImage, Title } from "./anime";

export type SearchResultFavouritesByUserId = {
  User: {
    favourites: {
      anime: {
        nodes: {
          title: Title;
          coverImage: coverImage;
        }[];
      };
      characters: {
        nodes: Character[];
      };
    };
  };
};
