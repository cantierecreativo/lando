import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import EditorialTmp from "components/templates/EditorialTmp";
import Section from "components/layout/Section";

function MuseumsPage({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page} parent={site.siena[0]}>
      <EditorialTmp locale={locale} page={page}>
        <Section blocks={page.blocks} locale={locale} site={site} />
      </EditorialTmp>
    </Layout>
  );
}

export async function getStaticProps({ preview, locale = "it" }) {
  const response = await fetchData(queries.getMuseumsPage, { locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.museumsPage,
      site,
    },
  };
}

export default MuseumsPage;
