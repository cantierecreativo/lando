import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import DastContent from "components/DastContent";
import EditorialTmp from "components/templates/EditorialTmp";
import Section from "components/layout/Section";

function EditorialPage({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <EditorialTmp locale={locale} page={page}>
        <Section blocks={page.blocks} locale={locale} site={site} />
      </EditorialTmp>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsPages, { locale: "it" });
  const paths = response.allPages.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "it" }) {
  const { slug } = params;
  const response = await fetchData(queries.getPage, { slug, locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.page,
      site,
    },
  };
}

export default EditorialPage;
