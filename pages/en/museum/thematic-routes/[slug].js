import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as ThematicRoutePage } from "pages/museo/percorsi-tematici/[slug].js";
export default ThematicRoutePage;

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsThematicRoutes, {
    locale: "en",
  });
  const paths = response.allThematicRoutes.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "en" }) {
  const { slug } = params;
  const response = await fetchData(
    queries.getThematicRoute,
    { slug, locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.thematicRoute,
      site,
    },
  };
}
