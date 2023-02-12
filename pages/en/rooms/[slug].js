import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as RoomPage } from "pages/sale/[slug].js";

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsRooms, { locale: "en" });
  const paths = response.allRooms.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "en" }) {
  const { slug } = params;
  const response = await fetchData(queries.getRoom, { slug, locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.room,
      site,
    },
  };
}

export default RoomPage;
