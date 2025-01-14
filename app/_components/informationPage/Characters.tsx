"use client";

import { useState } from "react";
import { AnimeInfo } from "../../_lib/graphql/types/anime";
import ContentContainer from "../ui/ContentContainer";
import Character from "./Character";

type CharactersProps = {
  anime: AnimeInfo;
};

export default function Characters({ anime }: CharactersProps) {
  //current selected language
  const [language, setLanguage] = useState<string>("Japanese");
  //list of all languages
  const languages = anime.characterPreview.edges[0].voiceActors.reduce(
    (arr: string[], character) =>
      arr.find((lan) => lan === character.languageV2)
        ? arr
        : [...arr, character.languageV2],
    [],
  );

  const [showAll, setShowAll] = useState<boolean>(false);
  const numCharacters = anime.characterPreview.edges.length;

  console.log(anime.characterPreview);
  return (
    <ContentContainer>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Characters: </h2>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          disabled={languages.length === 1}
          className="w-52 rounded-lg border border-gray-300 bg-primary-50 px-2 py-1 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-700 dark:text-white"
        >
          {languages.map((language, i) => (
            <option key={language + i}>{language}</option>
          ))}
        </select>
      </div>

      <ul className="grid grid-cols-2 gap-5 ">
        {anime.characterPreview.edges
          .slice(0, showAll ? numCharacters : 6)
          .map((character) => (
            <Character
              key={character.node.name.full}
              character={character}
              selectedLanguage={language}
            />
          ))}
      </ul>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-5 w-full rounded-lg border border-gray-300 bg-primary-100 px-4 py-2 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-primary-800 dark:bg-primary-600 dark:text-white"
      >
        {showAll ? "Show less" : "Show more"}
      </button>
    </ContentContainer>
  );
}
