"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useSearchContext } from "../../_lib/Context/SearchContext";
import { ChangeEvent } from "react";
import ContentContainer from "../ui/ContentContainer";

const years = Array.from({ length: 86 }, (_, i) => 2025 - i);
const formats = ["TV Show", "Movie", "OVA", "Special", "ONA", "Music"];
const seasons = ["Winter", "Spring", "Summer", "Fall"];

export default function SearchBar() {
  const { searchState } = useSearchContext();
  const params = new URLSearchParams();
  const searchParams = useSearchParams();

  const router = useRouter();

  const activeTags = [""];
  const activeGenres = [""];

  const { genres, tags } = searchState;
  const cleanTags = tags.filter((tag) => tag.isAdult === false);

  const handleSearchParams = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    //gets the value
    const value = event?.target.value;
    //gets the name of the search parameter ex. genre
    const name = event?.target.name;
    //gets the current search parameters or an empty string
    if (name !== "genres") {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value === "") {
        newSearchParams.delete(name);
        router.push(`/search/anime?${newSearchParams.toString()}`);
        return;
      }
      newSearchParams.set(name, value);
      router.push(`/search/anime?${newSearchParams.toString()}`);
      return;
    }
    const search = searchParams + "&" || "";
    //prepare the params
    params.set(name, value);
    //update the URL using the current search params and combining it with the new ones with &
    router.push(`/search/anime?${search + params.toString()}`);
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
            className="w-52 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Genres */}

        <div>
          <h4 className="mb-2 text-sm font-semibold">Genres</h4>
          <select
            name="genres"
            defaultValue={searchParams.get("genres") || "Any"}
            className="w-52 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
                        activeTags.includes(tag.name)
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
            className="w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            className="w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            className="w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
      </div>
    </ContentContainer>
  );
}
