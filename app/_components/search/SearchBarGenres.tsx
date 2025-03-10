import React from "react";

type SearchBarGenresProps = {
  searchParams: URLSearchParams;
  handleSearchParams: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  genres: string[];
  cleanTags: { name: string; isAdult: boolean }[];
  activeGenres: string[];
};

export default function SearchBarGenres({
  searchParams,
  handleSearchParams,
  genres,
  cleanTags,
  activeGenres,
}: SearchBarGenresProps) {
  return (
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
  );
}
