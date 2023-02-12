import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as ItineraryIndex } from "pages/siena/itinerari/index.js";
export default ItineraryIndex;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(
    queries.getItinerariesIndex,
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
