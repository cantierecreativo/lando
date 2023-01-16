import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";

function Article({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <div className="container py-20 text-5xl border-t">
        <p>Title: {page.title}</p>
        <p>Model: {page.model}</p>
        <p>Category: {page.category.title}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsNews, { locale: "it" });
  const paths = response.allNews.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale = "it", preview }) {
  const { slug } = params;
  const response = await fetchData(queries.getNews, { slug, locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.news,
      site,
    },
  };
}

export default Article;
