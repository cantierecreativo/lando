import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import HeroArtwork from "components/headers/HeroArtwork";
import OtherPages from "components/layout/OtherPages";
import Section from "components/layout/Section";
import Menu from "components/layout/Menu";
import Tags from "components/blocks/Tags";

function Artwork({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page} parent={site.artworksIndex}>
      <HeroArtwork locale={locale} page={page} />
      <Menu page={page} locale={locale} />
      <div className="bg-black color-white">
        <Section blocks={page.blocks} locale={locale} site={site} />
        <Tags tags={page.tags} locale={locale} />
      </div>
      <OtherPages locale={locale} pages={page.pagesRelated} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsArtworks, {
    locale: "it",
  });
  const paths = response.allArtworks.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "it" }) {
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

export default Artwork;
