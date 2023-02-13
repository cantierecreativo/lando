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
                    "z-20 bg-white fill-black w-10 h-8 rounded-[50%] hover:scale-150 duration-300 absolute top-24 md:top-28 lg:top-36 xl:scale-125",
                  next: "right-4 xl:right-8",
                  prev: "hidden xl:left-8 left-4 rotate-180",
                },
                arrowPath:
                  "m30.41666,14.59952a0.75677,0.7346 0 0 0 -0.04041,-0.04217l-5.4257,-5.26679a0.61431,0.59632 0 0 0 -0.86892,0.84347l4.37694,4.24776l-18.42416,0a0.61431,0.59632 0 1 0 0,1.19361l18.5262,0l-4.42038,4.28993a0.61431,0.59632 0 1 0 0.86892,0.84347l5.36811,-5.20795a0.68302,0.66301 0 0 0 0.04041,-0.90134l-0.00101,0l0,0.00001z",
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
