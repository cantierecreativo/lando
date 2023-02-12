import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as ItineraryPage } from "pages/siena/itinerari/[slug].js";
export default ItineraryPage;

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsItineraries, {
    locale: "en",
  });
  const paths = response.allItineraries.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "en" }) {
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
