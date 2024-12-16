export type SearchBarData = {
  genres: string[];
  tags: Tag[];
};

export type Tag = {
  __typename: string;
  name: string;
  description: string;
  category: string;
  isAdult: boolean;
};
