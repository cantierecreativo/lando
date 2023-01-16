import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";

function EditorialPage({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <div className="container py-20 text-5xl border-t">
        <p>Title: {page.title}</p>
        <p>Model: {page.model}</p>
      </div>
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
