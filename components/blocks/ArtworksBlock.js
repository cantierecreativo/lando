import Button from "components/layout/Button";
import t from "lib/locales";
import InternalLink from "./InternalLink";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import { Image as DatoImage } from "react-datocms";

function RenderCard(record, locale) {
  const { title, author, year } = record;
  const image = record.carouselHero[0].image;
  return (
    <>
      <InternalLink
        element={record}
        locale={locale}
        className="group"
        label={title}
      >
        <div className="h-full">
          <div className="border border-white/20 bg-white/5 h-52 relative md:h-[350px] xl:h-[400px]">
            <div className="w-[86%] h-[80%] centered">
              <DatoImage
                data={image.responsiveImage}
                alt={image.responsiveImage.alt}
                title={image.responsiveImage.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="py-4 text-white z-30 relative grid gap-2 xl:gap-3">
            <h2 className="font-serif text-xl duration-200 group-hover:text-yellow">
              {title}
            </h2>
            <h3 className="text-xs xl:text-base">{year}</h3>
            {author && (
              <h4 className="text-xs font-bold xl:text-base">{author}</h4>
            )}
          </div>
        </div>
      </InternalLink>
    </>
  );
}

export default function ArtworksBlock({ locale, site }) {
  return (
    <>
      <section className="text-white py-16 bg-black md:py-28 max-w-[100vw]">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap gap-5">
            <h2 className="uppercase font-serif text-2xl md:text-3xl lg:text-4xl w-full md:w-auto">
              {t("artworks", locale)}
            </h2>
            <InternalLink
              element={site.artworksIndex}
              locale={locale}
              className="group"
            >
              <Button
                locale={locale}
                arrow={true}
                color="border"
                label={t("show_all", locale)}
              />
            </InternalLink>
          </div>
        </div>
        <div className="mt-10 xl:mt-16 ml-4 lg:container lg:mx-auto">
          <Splide
            options={{
              rewind: true,
              rewindSpeed: 1000,
              speed: 1000,
              perPage: 1.3,
              perMove: 1,
              gap: 18,
              keyboard: true,
              mediaQuery: "min",
              breakpoints: {
                768: {
                  perPage: 2.3,
                },
                1024: {
                  perPage: 4,
                },
                1500: {
                  gap: 30,
                },
              },
              classes: {
                arrows: "",
                arrow:
                  "custom-arrow z-20 bg-white hover:bg-yellow duration-200 w-10 h-8 rounded-[50%] absolute top-24 md:top-32 xl:top-36 xl:scale-125",
                next: "right-12 xl:-right-4",
                prev: "hidden xl:block xl:-left-4 rotate-180",
              },
              arrowPath:
                "M39.7,19.2C39.7,19.2,39.6,19.2,39.7,19.2L29.4,8.9c-0.5-0.5-1.2-0.5-1.6,0c-0.5,0.5-0.5,1.2,0,1.6l8.3,8.3H1.2C0.5,18.8,0,19.3,0,20c0,0.6,0.5,1.2,1.2,1.2h35l-8.4,8.4c-0.5,0.5-0.5,1.2,0,1.6c0.5,0.5,1.2,0.5,1.6,0L39.6,21C40.1,20.5,40.1,19.7,39.7,19.2L39.7,19.2z",
            }}
            aria-label="Artworks gallery"
          >
            {site.allArtworks.map((c) => (
              <SplideSlide key={c.id}>{RenderCard(c, locale)}</SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
}
