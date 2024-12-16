"use client";

import { createContext, useContext, useEffect } from "react";
import { getSearchBarData } from "../graphql/fetchers/getSearchBarData";
import { SearchBarData } from "../graphql/types/search";
import useLocalStorageState from "../hooks/useLocalStorageState";

type SearchContextProps = {
  searchState: SearchBarData;
  setSearchState: React.Dispatch<React.SetStateAction<SearchBarData>>;
};

const SearchContext = createContext<SearchContextProps | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchState, setSearchState] = useLocalStorageState<SearchBarData>(
    "searchState",
    {
      genres: [],
      tags: [],
    },
  );

  useEffect(() => {
    async function getSearchData() {
      const data = await getSearchBarData();
      setSearchState(data);
    }
    getSearchData();
  }, [setSearchState]);

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
