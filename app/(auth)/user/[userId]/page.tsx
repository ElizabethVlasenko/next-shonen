import { fetchFavouritesByUserId } from "../../../_lib/graphql/fetchers/favouritesFetcher";

type PageProps = {
  params: { userId: string };
};

export default async function Page({ params }: PageProps) {
  const userId = await params.userId;

  const data = await fetchFavouritesByUserId(userId);
  console.log("data fetchFavoritesByUserId(userId)", data);

  return <div>{userId}</div>;
}
