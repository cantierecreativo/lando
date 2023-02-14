import { Image as DatoImage } from "react-datocms";
import { renderHTML } from "lib/utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import Icon from "components/layout/Icon";

const MilestoneSlide = ({ id, image, text, year, title }) => {
  return (
    <div key={id} className="w-[265px] pr-4 md:w-[450px] lg:w-[500px] lg:pr-8">
      {image && (
        <DatoImage
          className="h-44 md:h-auto"
          data={image.responsiveImage}
          alt={image.responsiveImage.alt}
          title={image.responsiveImage.title}
          objectFit="cover"
        />
      )}
      <div className="py-4 grid gap-3">
        <div className="font-sans text-xs lg:text-base lg:text-white/80">
          {year}
        </div>
        {title && <div className="font-serif text-xl">{title}</div>}
        {text && <div className="text-white/80">{renderHTML(text)}</div>}
      </div>
    </div>
  );
};

export default function MilestonBlock({ locale, record, wide }) {
  const { title, text, blocks } = record;
  return (
    <>
      <div className="max-w-[100vw]">
        <div className="container-left">
          <div className="py-6 lg:py-12">
            <h2 className="uppercase font-serif text-3xl">{title}</h2>
            {text && <h3 className="text-white/80 mt-4">{renderHTML(text)}</h3>}
            <Splide
              className="relative pt-4 lg:pt-12"
              options={{
                rewind: true,
                rewindSpeed: 1500,
                pagination: false,
                autoWidth: true,
                speed: 1000,
                rewindByDrag: true,
                classes: {
                  arrows: "",
                  arrow:
                    "custom-arrow z-20 bg-white fill-black w-10 h-8 rounded-[50%] hover:bg-yellow duration-300 absolute top-24 md:top-28 lg:top-36 xl:scale-125",
                  next: "right-4 xl:right-8",
                  prev: "hidden xl:left-8 left-4 rotate-180",
                },
                arrowPath:
                  "M39.7,19.2C39.7,19.2,39.6,19.2,39.7,19.2L29.4,8.9c-0.5-0.5-1.2-0.5-1.6,0c-0.5,0.5-0.5,1.2,0,1.6l8.3,8.3H1.2C0.5,18.8,0,19.3,0,20c0,0.6,0.5,1.2,1.2,1.2h35l-8.4,8.4c-0.5,0.5-0.5,1.2,0,1.6c0.5,0.5,1.2,0.5,1.6,0L39.6,21C40.1,20.5,40.1,19.7,39.7,19.2L39.7,19.2z",
              }}
              aria-label="Mileston"
            >
              {blocks.map((b) => {
                return (
                  <SplideSlide key={b.id}>
                    <MilestoneSlide locale={locale} {...b} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}
