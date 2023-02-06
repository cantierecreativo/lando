import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import IndexNewsTmp from "components/templates/IndexNewsTmp";

export default function NewsIndex({ locale, site, page, items }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <IndexNewsTmp locale={locale} page={page} items={items} />
    </Layout>
  );
}

export async function getStaticProps({ locale = "it", preview }) {
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
