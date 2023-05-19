"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getFragmentData, graphql } from "@/gql";
import DatoImage from "../DatoImage";

const Cover_block = graphql(`
  fragment Cover_block on CoverBlockRecord {
    id
    _modelApiKey
    colorsRev
    images {
      id
      responsiveImage(
        sizes: "100vw"
        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type CoverProps = {
  block: any;
};

export default function Cover(props: CoverProps) {
  const block = getFragmentData(Cover_block, props.block);
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        keyboard={true}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {block.images &&
          Object.values(block.images).map((image) => (
            <SwiperSlide key={image.id}>
              {image && (
                <DatoImage
                  layout="responsive"
                  objectFit="cover"
                  fragment={image.responsiveImage as any}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
