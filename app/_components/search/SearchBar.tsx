"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useSearchContext } from "../../_lib/Context/SearchContext";
import { ChangeEvent, useState } from "react";
import ContentContainer from "../ui/ContentContainer";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";

const years = Array.from({ length: 86 }, (_, i) => 2025 - i);
const formats = ["TV Show", "Movie", "OVA", "Special", "ONA", "Music"];
const seasons = ["Winter", "Spring", "Summer", "Fall"];

export default function SearchBar() {
  const { searchState } = useSearchContext();
  const searchParams = useSearchParams();

  const [activeGenres, setActiveGenres] = useState<string[]>(
    searchParams.getAll("genres") || [],
  );

  const router = useRouter();

  // const activeGenres: string[] = searchParams.getAll("genres");

  const { genres, tags } = searchState;
  const cleanTags = tags.filter((tag) => tag.isAdult === false);

  const handleSearchParams = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    //gets the value
    const value = event?.target.value;
    //gets the name of the search parameter ex. genre
    const name = event?.target.name;
    const newSearchParams = new URLSearchParams(searchParams);

    if (name !== "genres") {
      if (value === "") {
        newSearchParams.delete(name);
      } else {
        newSearchParams.set(name, value);
      }
    } else {
      // Handle genres
      if (activeGenres.includes(value)) {
        const updatedGenres = activeGenres.filter((genre) => genre !== value);
        setActiveGenres(updatedGenres);
        newSearchParams.delete("genres", value);
      } else {
        const updatedGenres = [...activeGenres, value];
        setActiveGenres(updatedGenres);
        newSearchParams.append("genres", value);
      }
    }
    router.push(`/search/anime?${newSearchParams.toString()}`);
  };

  return (
    <ContentContainer className="mb-8">
      <div className="flex gap-4">
        {/* Search Input */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Search</h4>
          <input
            name="search"
            onChange={handleSearchParams}
            type="text"
            defaultValue={searchParams.get("search") || ""}
            placeholder="Search anime..."
            className="w-48 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Genres */}
        {/* TODO: Custom select for multiple items */}
        {/* <SearchBarGenres
          searchParams={searchParams}
          handleSearchParams={handleSearchParams}
          activeGenres={activeGenres}
          genres={genres}
          cleanTags={cleanTags}
        /> */}

        <div>
          <h4 className="mb-2 text-sm font-semibold">Genres</h4>
          <select
            name="genres"
            defaultValue={searchParams.get("genres") || "Any"}
            className="w-48 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            {genres && cleanTags && (
              <>
                <option value="null" hidden>
                  Any
                </option>
                <optgroup label="Genres" className="text-sm font-bold">
                  {genres.map((genre) => (
                    <option
                      key={genre}
                      value={genre}
                      className={`px-3 py-1 text-sm hover:bg-accent-500 ${
                        activeGenres.includes(genre)
                          ? "bg-primary-500 text-white"
                          : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white"
                      }`}
                    >
                      {genre}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Tags">
                  {cleanTags.map((tag) => (
                    <option
                      key={tag.name}
                      value={tag.name}
                      className={`px-3 py-1 text-sm ${
                        activeGenres.includes(tag.name)
                          ? "bg-primary-500 text-white"
                          : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white"
                      }`}
                    >
                      {tag.name}
                    </option>
                  ))}
                </optgroup>
              </>
            )}
          </select>
        </div>

        {/* Year */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Year</h4>
          <select
            name="year"
            defaultValue={searchParams.get("year") || "Any"}
            className="w-48 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            <option value="null" hidden>
              Any
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Season */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Season</h4>
          <select
            name="season"
            defaultValue={searchParams.get("season") || "Any"}
            className="w-48 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            <option value="null" hidden>
              Any
            </option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>

        {/* Format */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Format</h4>
          <select
            name="format"
            defaultValue={searchParams.get("format") || "Any"}
            className="w-48 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            <option value="null" hidden>
              Any
            </option>
            {formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>

        {/* TODO: Add more search options */}
        <div className="ml-auto mt-auto h-fit rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </div>
      </div>
    </ContentContainer>
  );
}
