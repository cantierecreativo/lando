import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as ArtworksIndex } from "pages/opere/index.js";
export default ArtworksIndex;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(
    queries.getArtworksIndex,
    { locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.page,
      items: response.items,
      site,
    },
  };
}