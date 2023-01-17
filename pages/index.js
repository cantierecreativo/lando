import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";

export default function Home({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <h1 className="sr-only">Homepage | </h1>
      <div className="container py-20 text-5xl">
        {/* <p>{page.title}</p>
        <p>{page.record}</p> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale = "it", preview }) {
  const response = await fetchData(queries.getHomepage, { locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.homepage,
      site,
    },
  };
}
