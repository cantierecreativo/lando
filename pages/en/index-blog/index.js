import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as IndexBlog } from "pages/articoli-del-blog/index.js";
export default IndexBlog;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(queries.getNewsIndex, { locale }, preview);
  const categories = await fetchData(
    queries.getAllCategoryNews,
    { locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.newsIndex,
      categories: categories.allCategoryNews,
      site,
    },
  };
}
