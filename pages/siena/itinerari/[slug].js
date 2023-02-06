import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import HeroThematic from "components/headers/HeroThematic";
import DastContent from "components/DastContent";
import OtherPages from "components/layout/OtherPages";

function ItineraryPage({ locale, site, page }) {
  return (
    <Layout
      site={site}
      locale={locale}
      page={page}
      grandParent={site.museumPage[0]}
      parent={site.thematicRoutesIndex}
      color="rev"
    >
      <HeroThematic locale={locale} page={page} />
      <section className="py-12 lg:py-20 gap-8 grid formatted-text">
        <DastContent content={page.content} locale={locale} site={site} />
      </section>
      <OtherPages locale={locale} pages={page.pagesRelated} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsItineraries, {
    locale: "it",
  });
  const paths = response.allItineraries.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "it" }) {
  const { slug } = params;
  const response = await fetchData(
    queries.getItinerary,
    { slug, locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.itinerary,
      site,
    },
  };
}

export default ItineraryPage;
