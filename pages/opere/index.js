import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import IndexArtworksTmp from "components/templates/IndexArtworksTmp";

export default function ArtworksIndex({ locale, site, page, items }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <IndexArtworksTmp
        locale={locale}
        page={page}
        items={items}
      ></IndexArtworksTmp>
    </Layout>
  );
}

export async function getStaticProps({ locale = "it", preview }) {
  const response = await fetchData(
    queries.getArtworksIndex,
    { locale },
    preview
  );
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
