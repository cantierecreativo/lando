import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as historyPage } from "pages/museo/storia.js";
export default historyPage;

export async function getStaticProps({ preview, locale = "en" }) {
  const response = await fetchData(queries.getHistoryPage, { locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.historyPage,
      site,
    },
  };
}
