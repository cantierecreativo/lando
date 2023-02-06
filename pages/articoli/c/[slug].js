import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import IndexNewsTmp from "components/templates/IndexNewsTmp";

function NewsCategory({ locale, site, page, items }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <IndexNewsTmp locale={locale} page={page} items={items} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllCategoryNews, {
    locale: "it",
  });
  const paths = response.allCategoryNews.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale = "it", preview }) {
  const { slug } = params;
  const response = await fetchData(
    queries.getCategoryNews,
    { slug, locale },
    preview
  );
  const id = response.categoryNews.id;
  const filter = await fetchData(queries.getNewsByCategory, { id, locale });
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

export default NewsCategory;
