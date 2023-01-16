import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as EditorialPage } from "pages/[slug].js";
export default EditorialPage;

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsPages, { locale: "en" });
  const paths = response.allPages.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale = "en", preview }) {
  const { slug } = params;
  const response = await fetchData(queries.getPage, { slug, locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.page,
      site,
    },
  };
}
