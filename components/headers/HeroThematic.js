import { renderHTML } from "lib/utils";
import { Image as DatoImage } from "react-datocms";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React, { useRef, useEffect } from "react";
import t from "lib/locales";
import Icon from "components/layout/Icon";

// function getIndexSlide(slider) {
//   useEffect(() => {
//     if (slider.current) {
//       return slider.current.splide.index;
//     }
//   });
// }

function renderCard(s, steps, index, locale, show, setShow) {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-36">
        <div className="">
          <DatoImage
            className="max-h-60 md:max-h-96 lg:max-h-[600px]"
            data={s.image.responsiveImage}
            alt={s.image.responsiveImage.alt}
            title={s.image.responsiveImage.title}
            objectPosition="left"
            objectFit="contain"
          />
          {s.descriptionImage && (
            <div className="text-xs font-serif font-light py-2">
              {renderHTML(s.descriptionImage)}
            </div>
          )}
        </div>
        <div className="grid gap-6 content-start">
          <div className="">
            {index + 1} / {steps.length}
          </div>
          <h2 className="font-serif text-2xl">{s.title}</h2>
          <div className="relative">
            <div
              className={`${
                show
                  ? ""
                  : "max-h-56 overflow-hidden after:absolute after:bottom-8 after:left-0 after:right-0 after:h-20 after:bg-gradient-to-t from-black"
              } duration-200 text-white/80`}
            >
              {renderHTML(s.text)}
            </div>
            <button
              onClick={() => setShow(true)}
              className="relative pt-6 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-white"
            >
              {show ? null : <>{t("read_all", locale)}</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HeroThematic({ locale, page }) {
  const slideShow = useRef();
  const thumbs = useRef();
  // let indexSlider;
  useEffect(() => {
    if (slideShow.current && thumbs.current && thumbs.current.splide) {
      slideShow.current.sync(thumbs.current.splide);
    }
    // if (slideShow.current) {
    //   indexSlider = slideShow.current.splide.index;
    //   return indexSlider;
    // }
  }, slideShow);

  const [show, setShow] = React.useState();

  const { steps } = page;
  return (
    <>
      <header className="bg-black max-w-[100vw] overflow-hidden">
        <div className="container slide-show">
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              keyboard: true,
              autoHeight: false,
            }}
            aria-label="Slideshow"
            ref={slideShow}
          >
            <div className="splide__arrows py-6 lg:pt-4 lg:py-8">
              <button className="splide__arrow splide__arrow--prev flex gap-2 items-center group">
                <Icon
                  name="down"
                  className="rotate-90 fill-white group-hover:-translate-x-1 duration-200"
                  size="25"
                />
                {t("prev", locale)}
              </button>
              <button className="splide__arrow splide__arrow--next hidden">
                Next
              </button>
            </div>
            <SplideTrack>
              {steps.map((s, i) => (
                <SplideSlide key={s.id}>
                  {renderCard(s, steps, i, locale, show, setShow)}
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
        <div className="bg-[#27221F] py-6 mt-4 lg:py-14">
          <div id="thumbnail" class="thumbnail" aria-label="Thumbnails">
            <div className="container grid xl:grid-cols-12">
              <div className="xl:col-span-10 xl:col-start-2">
                <div className="mb-6">{t("path", locale)}</div>
                <Splide
                  hasTrack={false}
                  options={{
                    rewind: true,
                    autoWidth: true,
                    isNavigation: true,
                    pagination: false,
                    arrows: false,
                    cover: false,
                    gap: "0.7rem",
                    breakpoints: {
                      768: {
                        gap: "0.7rem",
                      },
                    },
                  }}
                  ref={thumbs}
                  aria-label="Thumbs"
                >
                  <div className="custom-wrapper">
                    <SplideTrack>
                      {steps.map((s) => (
                        <SplideSlide key={s.id}>
                          <div className="relative w-16 h-16 p-[2px] md:w-24 md:h-24">
                            <div className="w-full h-full relative border-custom p-[6px]">
                              <div className="w-full h-full relative">
                                <DatoImage
                                  data={s.image.responsiveImage}
                                  alt={s.image.responsiveImage.alt}
                                  title={s.image.responsiveImage.title}
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </div>
                            </div>
                          </div>
                        </SplideSlide>
                      ))}
                    </SplideTrack>
                  </div>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
