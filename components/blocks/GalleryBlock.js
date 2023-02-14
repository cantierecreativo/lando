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
                  "custom-arrow z-20 bg-black fill-white w-10 h-8 rounded-[50%] hover:bg-red duration-300 absolute top-28 md:top-36 lg:top-44 xl:top-52 xl:scale-125",
                next: "right-4 xl:right-8",
                prev: "xl:left-8 left-4 rotate-180",
              },
              arrowPath:
                "M39.7,19.2C39.7,19.2,39.6,19.2,39.7,19.2L29.4,8.9c-0.5-0.5-1.2-0.5-1.6,0c-0.5,0.5-0.5,1.2,0,1.6l8.3,8.3H1.2C0.5,18.8,0,19.3,0,20c0,0.6,0.5,1.2,1.2,1.2h35l-8.4,8.4c-0.5,0.5-0.5,1.2,0,1.6c0.5,0.5,1.2,0.5,1.6,0L39.6,21C40.1,20.5,40.1,19.7,39.7,19.2L39.7,19.2z",
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
