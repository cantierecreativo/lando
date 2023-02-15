import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import HeroVideo from "components/headers/HeroVideo";
import OtherPages from "components/layout/OtherPages";
import Section from "components/layout/Section";
import Menu from "components/layout/Menu";
import Tags from "components/blocks/Tags";

function Video({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page} parent={site.videosIndex}>
      <HeroVideo locale={locale} page={page} />
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
  const response = await fetchData(queries.getAllSlugsVideo, {
    locale: "it",
  });
  const paths = response.allVideos.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, preview, locale = "it" }) {
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

export default Video;
