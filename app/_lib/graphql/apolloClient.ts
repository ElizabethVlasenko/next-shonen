import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  type TypePolicies,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// const typePolicies: TypePolicies = {
//   Query: {
//     fields: {
//       Page: {
//         keyArgs: ["page", "search", "type", "sort", "format"],
//         merge(existing, incoming) {
//           if (!existing) {
//             return incoming;
//           }

//           const merged = {
//             ...incoming,
//             media: [...existing.media, ...incoming.media],
//           };
//           return merged;
//         },
//       },
//     },
//   },
// };

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
  cache: new InMemoryCache(), //cache: new InMemoryCache({typePolicies}),
  link: from([errorLink, httpLink]),
  connectToDevTools: true,
});

export default client;
