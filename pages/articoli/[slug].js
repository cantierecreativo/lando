import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import NewsTmp from "components/templates/NewsTmp";
import Section from "components/layout/Section";

function Article({ locale, site, page, lastNews }) {
  return (
    <Layout
      site={site}
      locale={locale}
      page={page}
      parent={site.newsIndex}
      color="light"
    >
      <NewsTmp locale={locale} page={page} site={site} lastNews={lastNews}>
        <Section
          blocks={page.blocks}
          locale={locale}
          site={site}
          color="light"
        />
      </NewsTmp>
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
      lastNews: response.allNews,
      site,
    },
  };
}

export default Article;
