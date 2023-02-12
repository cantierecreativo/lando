import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as TicketPage } from "pages/biglietti.js";
export default TicketPage;

export async function getStaticProps({ locale = "en", preview }) {
  const response = await fetchData(queries.getTicketsPage, { locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.ticketsPage,
      site,
    },
  };
}
