import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import IndexTmp from "components/templates/IndexTmp";

export default function IndexRooms({ locale, site, page, items }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <IndexTmp locale={locale} page={page} items={items}></IndexTmp>
    </Layout>
  );
}

export async function getStaticProps({ locale = "it", preview }) {
  const response = await fetchData(queries.getRoomsIndex, { locale }, preview);
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
