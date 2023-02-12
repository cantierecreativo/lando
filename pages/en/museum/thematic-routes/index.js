import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as IndexThematicRoutes } from "pages/museo/percorsi-tematici/index.js";
export default IndexThematicRoutes;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(
    queries.getThematicRoutesIndex,
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
