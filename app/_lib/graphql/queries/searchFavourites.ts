import gql from "graphql-tag";

export const SEARCH_FAVOURITES_BY_USER_ID = gql`
  query User($name: String) {
    User(name: $name) {
      favourites {
        anime {
          nodes {
            title {
              english
              native
              romaji
              userPreferred
            }
            coverImage {
              large
              extraLarge
              color
            }
          }
        }
        characters {
          nodes {
            name {
              full
            }
            image {
              medium
            }
          }
        }
      }
    }
  }
`;
