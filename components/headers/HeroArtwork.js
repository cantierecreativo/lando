import { renderHTML } from "lib/utils";
import { Image as DatoImage } from "react-datocms";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import React, { useState, useRef, useEffect } from "react";

export default function Hero({ page, visual }) {
  const { title, imageHero, textHero, carouselHero } = page;
  const slideShow = useRef();
  const thumbs = useRef();
  useEffect(() => {
    if (slideShow.current && thumbs.current && thumbs.current.splide) {
      slideShow.current.sync(thumbs.current.splide);
    }
  }, slideShow);

  return (
    <header className="container py-8 xl:py-12 carousel-artworks">
      <div className="grid gap-12 lg:flex lg:gap-0">
        <div className="lg:flex lg:gap-4 lg:flex-row-reverse lg:flex-none xl:w-1/2 lg:w-2/3 lg:justify-end">
          <div className="relative lg:flex-none lg:w-4/6 xl:w-5/6 lg:px-0">
            <Splide
              options={{
                rewind: true,
                rewindSpeed: 1000,
                speed: 1000,
                perPage: 1,
                pagination: false,
                arrows: false,
                rewindByDrag: true,
                keyboard: true,
              }}
              aria-label="Standard Gallery"
              ref={slideShow}
            >
              {carouselHero.map((slide, n) => (
                <SplideSlide key={slide.id}>
                  <div className="w-full relative h-[380px] md:h-[640px] bg-white/5">
                    <DatoImage
                      data={slide.image.responsiveImage}
                      alt={slide.image.responsiveImage.alt}
                      title={slide.image.responsiveImage.title}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  {slide.description && (
                    <div className="font-serif text-xs font-normal mt-3">
                      {renderHTML(slide.description)}
                    </div>
                  )}
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="thumbnail mt-6 lg:flex-none lg:px-0 lg:mt-0">
            <Splide
              options={{
                rewind: true,
                isNavigation: true,
                pagination: false,
                arrows: false,
                autoWidth: true,
                gap: "0rem",
                dragMinThreshold: {
                  mouse: 4,
                  touch: 10,
                },
                breakpoints: {
                  1023: {
                    gap: "2rem",
                  },
                  768: {
                    gap: "0.7rem",
                  },
                },
              }}
              ref={thumbs}
              aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
            >
              {carouselHero.map((slide) => {
                return (
                  <SplideSlide key={slide.id}>
                    <div className="w-[60px] h-[80px] md:w-[90px] md:h-[100px] relative bg-white">
                      <DatoImage
                        data={slide.thumbImage.responsiveImage}
                        alt={slide.thumbImage.responsiveImage.alt}
                        title={slide.thumbImage.responsiveImage.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
        <div className="xl:w-1/2 xl:flex-none xl:pl-24">
          <h1 className="uppercase font-serif text-xl md:text-2xl lg:col-span-4 xl:text-4xl mb-2">
            {title}
          </h1>
          {textHero && (
            <h2 className="opacity-80 lg:col-span-6 lg:col-start-6 xl:mt-1">
              {renderHTML(textHero)}
            </h2>
          )}
        </div>
      </div>
    </header>
  );
}
