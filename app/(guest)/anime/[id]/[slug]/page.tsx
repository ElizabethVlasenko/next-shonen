import Banner from "../../../../_components/informationPage/Banner";
import Characters from "../../../../_components/informationPage/Characters";
import CoverImage from "../../../../_components/informationPage/CoverImage";
import Description from "../../../../_components/informationPage/Description";
import SidebarInfo from "../../../../_components/informationPage/SidebarInfo";
import { fetchAnimeById } from "../../../../_lib/graphql/fetchers/animeFetcherById";

type PageProps = {
  params: { id: string; slug: string };
};

export default async function page({ params }: PageProps) {
  const itemId = (await params).id;
  const anime = await fetchAnimeById({ mediaId: +itemId });

  console.log(anime);

  return (
    <div>
      <Banner anime={anime} />

      {/* Main Content */}
      <div className="mt-6 flex items-start gap-6">
        <div className="flex min-w-[300px] flex-col justify-start gap-6">
          <CoverImage anime={anime} />

          <SidebarInfo anime={anime} />
        </div>
        <div className="flex flex-col gap-6">
          <Description anime={anime} />

          <Characters anime={anime} />
        </div>
      </div>
    </div>
  );
}
