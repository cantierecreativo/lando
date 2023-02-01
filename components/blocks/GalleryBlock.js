import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import { Image as DatoImage } from "react-datocms";
import { renderHTML } from "lib/utils";

export default function GalleryBlock({ locale, record }) {
  return (
    <>
      <section className="container xl:grid xl:grid-cols-12 gallery py-6 lg:py-12">
        <div className="xl:col-span-10 xl:col-start-2">
          <Splide
            options={{
              rewind: true,
              rewindSpeed: 1000,
              speed: 1000,
              perMove: 1,
              keyboard: true,
              classes: {
                arrows: "",
                arrow:
                  "z-20 bg-black fill-white w-8 h-6 rounded-[50%] hover:scale-150 duration-300 absolute top-28 md:top-36 lg:top-44 xl:top-52 xl:scale-125",
                next: "right-4 xl:right-8",
                prev: "xl:left-8 left-4 rotate-180",
              },
              arrowPath:
                "m30.41666,14.59952a0.75677,0.7346 0 0 0 -0.04041,-0.04217l-5.4257,-5.26679a0.61431,0.59632 0 0 0 -0.86892,0.84347l4.37694,4.24776l-18.42416,0a0.61431,0.59632 0 1 0 0,1.19361l18.5262,0l-4.42038,4.28993a0.61431,0.59632 0 1 0 0.86892,0.84347l5.36811,-5.20795a0.68302,0.66301 0 0 0 0.04041,-0.90134l-0.00101,0l0,0.00001z",
            }}
            aria-label="Gallery"
          >
            {record.images.map((i) => (
              <SplideSlide key={i.id}>
                <div className="h-60 relative md:h-80 lg:h-96 xl:h-[600px]">
                  <DatoImage
                    className=""
                    data={i.image.responsiveImage}
                    alt={i.image.responsiveImage.alt}
                    title={i.image.responsiveImage.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  {i.description && (
                    <div className="text-xs font-serif py-3 font-light">
                      {renderHTML(record.description)}
                    </div>
                  )}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
}
