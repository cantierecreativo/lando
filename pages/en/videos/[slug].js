import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as Video } from "pages/video/[slug].js";
export default Video;

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsVideo, {
    locale: "en",
  });
  const paths = response.allVideos.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "en" }) {
  const { slug } = params;
  const response = await fetchData(queries.getVideo, { slug, locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.video,
      site,
    },
  };
}
