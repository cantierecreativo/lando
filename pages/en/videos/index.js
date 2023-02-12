import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as VideoIndex } from "pages/video/index.js";
export default VideoIndex;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(queries.getVideosIndex, { locale }, preview);
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
