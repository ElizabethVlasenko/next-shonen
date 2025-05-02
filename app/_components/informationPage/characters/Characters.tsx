"use client";

import { useState } from "react";
import { AnimeInfo } from "../../../_lib/graphql/types/anime";
import ContentContainer from "../../ui/ContentContainer";
import Character from "./Character";
import Button from "../../ui/Button";
import useInfiniteScroll from "../../../_lib/hooks/useInfiniteScroll";
import { fetchCharacterTitleById } from "../../../_lib/graphql/fetchers/charactersFetcherById";

type CharactersProps = {
  anime: AnimeInfo;
  mediaId: string;
};

const CHARACTERS_SHORT_LIST_LENGTH = 6;

export default function Characters({ anime, mediaId }: CharactersProps) {
  const characterFetchFn = async (page: number) => {
    const response = await fetchCharacterTitleById(mediaId, page);

    console.log("response", response);
    return response.Page.media?.characterPreview.edges;
  };

  const {
    data: results,
    loading,
    observerRef,
  } = useInfiniteScroll({
    initialResults: anime.characterPreview.edges,
    fetchFn: characterFetchFn,
  });

  console.log(results, loading, observerRef);
  //current selected language
  const [language, setLanguage] = useState<string>("Japanese");
  //list of all languages
  const languages = results[0]?.voiceActors.reduce(
    (arr: string[], character) =>
      arr.find((lan) => lan === character.languageV2)
        ? arr
        : [...arr, character.languageV2],
    [],
  );

  const [showAll, setShowAll] = useState<boolean>(false);
  const numCharacters = anime.characterPreview.edges.length;

  if (!languages) return null;

  // console.log(anime.characterPreview);
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

      <ul className="grid grid-cols-2 gap-5">
        {results
          .slice(0, showAll ? numCharacters : CHARACTERS_SHORT_LIST_LENGTH)
          .map((character) => (
            <Character
              key={character.node.name.full}
              character={character}
              selectedLanguage={language}
            />
          ))}
        {showAll && loading && (
          <div className="h-10 w-full text-center">
            <p className="mt-8 text-center">Loading more...</p>
          </div>
        )}
        {showAll && <div ref={observerRef} className="w-full" />}
      </ul>
      {numCharacters > CHARACTERS_SHORT_LIST_LENGTH && (
        <Button
          variant="secondaryPurple"
          onClick={() => setShowAll(!showAll)}
          className="mt-5 w-full"
        >
          {showAll ? "Show less" : "Show more"}
        </Button>
      )}
    </ContentContainer>
  );
}
