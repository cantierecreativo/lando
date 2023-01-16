import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as NewsCategory } from "pages/articoli-del-blog/c/[slug]";
export default NewsCategory;

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllCategoryNews, {
    locale: "en",
  });
  const paths = response.allCategoryNews.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale = "en", preview }) {
  const { slug } = params;
  const response = await fetchData(
    queries.getCategoryNews,
    { slug, locale },
    preview
  );
  const id = response.categoryNews.id;
  const filter = await fetchData(
    queries.getNewsByCategory,
    { id, locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.categoryNews,
      items: filter.allNews,
      site,
    },
  };
}
