import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as IndexRooms } from "pages/sale/index.js";
export default IndexRooms;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(queries.getRoomsIndex, { locale }, preview);
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
