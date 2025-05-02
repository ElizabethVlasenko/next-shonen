import { Character, PageInfo, voiceActor } from "./anime";

export type fetchCharacterTitleByIdType = {
  Page: {
    pageInfo: PageInfo;
    media: {
      characterPreview: {
        edges: {
          id: number;
          role: string;
          name: string;
          voiceActors: voiceActor[];
          node: Character;
        }[];
      };
    };
  };
};
