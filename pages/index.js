import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import HeroHp from "components/headers/HeroHp";
import MainInfo from "components/blocks/MainInfo";
import { Image as DatoImage } from "react-datocms";
import TitleSection from "components/blocks/TitleSection";
import FlagHp from "components/blocks/FlagHp";

export default function Home({ locale, site, page }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <HeroHp page={page} locale={locale} />
      <MainInfo site={site} locale={locale} />
      <section className="relative min-h-[4000px]">
        <div className="relative h-[1600px]">
          <DatoImage
            className="w-full h-auto z-0"
            data={page.imageBgIntro.responsiveImage}
            alt={page.imageBgIntro.responsiveImage.alt}
            title={page.imageBgIntro.responsiveImage.title}
            objectFit="cover"
            layout="fill"
          />
          <div className="bg-black/95 absolute inset-0" />
          <div className="bg-gradient-to-t from-red absolute h-[60%] bottom-0 left-0 right-0" />
          <div className="grid gap-10 content-start py-16 xl:py-24 z-10 relative container">
            <TitleSection title={page.titleIntro} text={page.subtitleIntro} />
            <FlagHp site={site} record={page} locale={locale} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale = "it", preview }) {
  const response = await fetchData(queries.getHomepage, { locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.homepage,
      site,
    },
  };
}
