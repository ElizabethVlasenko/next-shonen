import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  type TypePolicies,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      Page: {
        keyArgs: ["page", "search", "type", "sort", "format"],
        merge(existing, incoming) {
          if (!existing) {
            return incoming;
          }

          const existingMedia = existing.media || []; // Ensure existing.media is an array
          const incomingMedia = incoming.media || []; // Ensure incoming.media is an array

          const merged = {
            ...incoming,
            media: [...existingMedia, ...incomingMedia],
          };
          return merged;
        },
      },
    },
  },
  Media: {
    fields: {
      coverImage: {
        merge(existing, incoming) {
          if (!existing) {
            return incoming;
          }
          return {
            ...existing,
            ...incoming,
          };
        },
      },
    },
  },
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: "https://graphql.anilist.co" });

const client = new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  link: from([errorLink, httpLink]),
  connectToDevTools: true,
});

export default client;
