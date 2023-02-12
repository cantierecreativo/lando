import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as MuseumsPage } from "pages/siena/visita-musei.js";

export async function getStaticProps({ preview, locale = "en" }) {
  const response = await fetchData(queries.getMuseumsPage, { locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.museumsPage,
      site,
    },
  };
}

export default MuseumsPage;
