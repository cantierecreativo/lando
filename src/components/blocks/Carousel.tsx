"use client";

import DatoImage from "../DatoImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";

import "swiper/css";
import { getFragmentData, graphql } from "@/gql";

const Carousel_block = graphql(`
  fragment Carousel_block on CarouselBlockRecord {
    id
    _modelApiKey
    colorsRev
    images {
      id
      responsiveImage(
        sizes: "(min-width: 1024px) 50vw, 100vw"
        imgixParams: { fit: clip, w: 1200, h: 600, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type CarouselProps = {
  block: any;
};

export default function Carousel(props: CarouselProps) {
  const block = getFragmentData(Carousel_block, props.block);
  const bgColor = block.colorsRev ? "bg-back-rev" : "";
  return (
    <div className={`${bgColor}`}>
      <div className="mx-auto max-w-screen-2xl">
        <Swiper
          keyboard={true}
          modules={[A11y]}
          slidesPerView={"auto"}
          spaceBetween={30}
          className="slider-auto-width"
        >
          {block.images &&
            Object.values(block.images).map((image) => (
              <SwiperSlide key={image.id}>
                <div className="max-w-[60vw] cover">
                  <DatoImage
                    className="h-full"
                    objectFit="cover"
                    fragment={image.responsiveImage as any}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
