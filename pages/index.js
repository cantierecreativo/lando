import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import HeroHp from "components/headers/HeroHp";
import MainInfo from "components/blocks/MainInfo";
import { Image as DatoImage } from "react-datocms";
import TitleSection from "components/blocks/TitleSection";
import FlagHp from "components/blocks/FlagHp";
import StandardCard from "components/cards/StandardCard";
import HpCard from "components/cards/HpCard";
import PostContent from "components/PostContent";
import t from "lib/locales";
import InternalLink from "components/blocks/InternalLink";
import Button from "components/layout/Button";
import NewsCard from "components/cards/NewsCard";

export default function Home({ locale, site, page, rooms, news }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <HeroHp page={page} locale={locale} />
      <MainInfo site={site} locale={locale} />
      <div className="relative">
        <DatoImage
          className="w-full h-auto z-0"
          data={page.imageBgIntro.responsiveImage}
          alt={page.imageBgIntro.responsiveImage.alt}
          title={page.imageBgIntro.responsiveImage.title}
          objectFit="cover"
          usePlaceholder={false}
          layout="fill"
        />
        <div className="bg-black/90 absolute inset-0" />
        <div className="bg-gradient-to-t from-red absolute h-[60%] bottom-0 left-0 right-0" />
        <div className="grid gap-10 xl:gap-24 content-start py-24 xl:py-44 z-10 relative container">
          <TitleSection title={page.titleIntro} text={page.subtitleIntro} />
          <FlagHp site={site} record={page} locale={locale} />
          <section>
            <div className="py-4">
              <h2 className="title xl:text-5xl text-center max-w-4xl mx-auto">
                {page.titleRoom}
              </h2>
              <div className="grid gap-5 mt-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
                {rooms?.map((r) => (
                  <StandardCard key={r.id} record={r} locale={locale} />
                ))}
              </div>
            </div>
          </section>
          <section className="lg:pt-8 grid gap-6 lg:gap-12 content-center">
            <TitleSection
              title={page.titleBuilding}
              text={page.subtitleBuilding}
            />
            <HpCard
              locale={locale}
              prefix={page.prefixBlockBuilding}
              title={page.titleBlockBuilding}
              text={page.textBlockBuilding}
              url={t("building_Url", locale)}
              image={page.imageBlockBuilding}
            />
          </section>
        </div>
      </div>
      <div className="grid gap-12 lg:gap-24">
        {page.blocks.map((b) => (
          <PostContent site={site} key={b.id} record={b} locale={locale} />
        ))}
      </div>
      <section className="container py-10">
        <div className="lg:py-12 grid gap-6 lg:gap-12 content-center">
          <HpCard
            locale={locale}
            prefix={page.prefixBlockSiena}
            title={page.titleBlockSiena}
            text={page.textBlockSiena}
            url={t("siena_Url", locale)}
            image={page.imageBlockSiena}
          />
        </div>
      </section>
      <section className="container py-10 mb-8 lg:-mb-8">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h2 className="uppercase font-serif text-2xl md:text-3xl lg:text-4xl w-full md:w-auto">
            {t("news_title", locale)}
          </h2>
          <InternalLink
            element={site.newsIndex}
            locale={locale}
            className="group"
          >
            <Button
              locale={locale}
              arrow={true}
              color="transparent"
              label={t("show_all", locale)}
            />
          </InternalLink>
        </div>
        <div className="mt-8 lg:my-16">
          {news?.map((n) => (
            <NewsCard key={n.id} news={n} locale={locale} />
          ))}
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
      rooms: response.allRooms,
      news: response.allNews,
      site,
    },
  };
}
