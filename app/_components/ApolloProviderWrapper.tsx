"use client";

import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../_lib/graphql/apolloClient";

export default function ApolloProviderWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
