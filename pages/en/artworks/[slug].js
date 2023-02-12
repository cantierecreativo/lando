import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as Artwork } from "pages/opere/[slug].js";
export default Artwork;

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsArtworks, {
    locale: "en",
  });
  const paths = response.allArtworks.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "en" }) {
  const { slug } = params;
  const response = await fetchData(
    queries.getArtwork,
    { slug, locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.artwork,
      site,
    },
  };
}
