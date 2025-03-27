import Banner from "../../../../_components/informationPage/Banner";
import Characters from "../../../../_components/informationPage/characters/Characters";
import CoverImage from "../../../../_components/informationPage/sidebar/CoverImage";
import Description from "../../../../_components/informationPage/Description";
import SidebarInfo from "../../../../_components/informationPage/sidebar/SidebarInfo";
import SidebarTags from "../../../../_components/informationPage/sidebar/SidebarTags";
import { fetchAnimeById } from "../../../../_lib/graphql/fetchers/animeFetcherById";
import Relations from "../../../../_components/informationPage/relations/Relations";
import StaffList from "../../../../_components/informationPage/staff/StaffList";

type PageProps = {
  params: { id: string; slug: string };
};

export default async function page({ params }: PageProps) {
  const itemId = (await params).id;
  const anime = await fetchAnimeById({ mediaId: +itemId });

  return (
    <div>
      <Banner anime={anime} />

      {/* Main Content */}
      <div className="mt-6 flex items-start gap-6">
        <div className="flex w-[300px] min-w-[300px] flex-col justify-start gap-6">
          <CoverImage anime={anime} />

          <SidebarInfo anime={anime} />

          <SidebarTags tags={anime.tags} />
        </div>
        <div className="flex grow flex-col gap-6">
          <Description anime={anime} />

          {anime.relations.edges.length > 0 && <Relations anime={anime} />}

          {anime.characterPreview.edges.length > 0 && (
            <Characters anime={anime} mediaId={String(itemId)} />
          )}

          {anime.staffPreview.edges.length > 0 && <StaffList anime={anime} />}
        </div>
      </div>
    </div>
  );
}
