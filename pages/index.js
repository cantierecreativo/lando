import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import HeroHp from "components/headers/HeroHp";
import MainInfo from "components/blocks/MainInfo";

export default function Home({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <HeroHp page={page} locale={locale} />
      <MainInfo site={site} locale={locale} />
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
