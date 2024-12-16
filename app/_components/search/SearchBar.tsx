"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useSearchContext } from "../../_lib/Context/SearchContext";
import { ChangeEvent } from "react";

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
    <div className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
      <div className="flex gap-4">
        {/* Search Input */}
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Search
          </h4>
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
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Genres
          </h4>
          <select
            name="genres"
            defaultValue={searchParams.get("genres") || ""}
            className="w-52 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            {genres && tags && (
              <>
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
                  {tags.map((tag) => (
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
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Year
          </h4>
          <select
            name="year"
            defaultValue={searchParams.get("year") || ""}
            className="w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            <option value="">Any Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Season */}
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Season
          </h4>
          <select
            name="season"
            defaultValue={searchParams.get("season") || ""}
            className="w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            <option value="">Any Season</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>

        {/* Format */}
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Format
          </h4>
          <select
            name="format"
            defaultValue={searchParams.get("format") || ""}
            className="w-52 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            onChange={handleSearchParams}
          >
            <option value="">Any Format</option>
            {formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
