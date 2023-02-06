import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as IndexBlog } from "pages/articoli/index.js";
export default IndexBlog;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(queries.getNewsIndex, { locale }, preview);
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
