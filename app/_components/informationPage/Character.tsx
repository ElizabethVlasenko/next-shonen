import Image from "next/image";
import React from "react";
import { stringToSentenceCase } from "../../_lib/helpers/formatters/stringFormat";
import {
  Character as CharacterType,
  voiceActor,
} from "../../_lib/graphql/types/anime";

type CharacterProps = {
  selectedLanguage: string;
  character: {
    id: number;
    role: string;
    name: string;
    voiceActors: voiceActor[];
    node: CharacterType;
  };
};

export default function Character({
  character,
  selectedLanguage,
}: CharacterProps) {
  const selectedLanguageVoiceActor =
    character.voiceActors.find(
      (voiceActor) => voiceActor.languageV2 === selectedLanguage,
    ) || null;

  return (
    <li
      key={character.node.name.full}
      className="grid grid-cols-2 justify-between gap-2 rounded-lg bg-primary-50 bg-opacity-35 dark:bg-primary-800 dark:bg-opacity-40"
    >
      {/* TODO: link character to a character page */}
      <div className="flex items-center gap-2 text-sm">
        <Image
          key={character.node.image.medium}
          src={character.node.image.medium}
          alt={character.node.name.full}
          width={60}
          height={90}
          style={{ height: "90px", width: "60px" }}
          className="rounded-lg"
        />
        <div className="flex h-full w-full flex-col justify-between px-1 py-2">
          <span>{character.node.name.full}</span>
          <span className="text-xs">
            {stringToSentenceCase(character.role)}
          </span>
        </div>
      </div>
      {/* TODO: link voice actor to a voice actor page */}
      {selectedLanguageVoiceActor && (
        <div className="items-top flex justify-end gap-2">
          <div className="flex h-full flex-col justify-between px-1 py-2 text-right text-sm">
            <span>{selectedLanguageVoiceActor.name.full}</span>
            <span className="text-xs">
              {selectedLanguageVoiceActor.languageV2}
            </span>
          </div>
          {character.voiceActors[0]?.image && (
            <Image
              key={selectedLanguageVoiceActor.image.medium}
              src={selectedLanguageVoiceActor.image.medium}
              alt={selectedLanguageVoiceActor.name.full}
              width={60}
              height={90}
              style={{ height: "90px", width: "60px" }}
              className="rounded-lg"
            />
          )}
        </div>
      )}
    </li>
  );
}
