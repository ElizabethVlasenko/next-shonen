import gql from "graphql-tag";

export const SEARCH_BAR_DATA = gql`
  query Query {
    genres: GenreCollection
    tags: MediaTagCollection {
      name
      description
      category
      isAdult
    }
  }
`;
