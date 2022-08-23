import { Image } from "react-datocms";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';

import 'swiper/css';

export default function Carousel({ block }) {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Swiper
        keyboard={true}
        modules={[A11y]}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="slider-auto-width"
      >
        {block.images && Object.values(block.images).map((image) => (
          <SwiperSlide key={image.id}>
            <div className="max-w-[60vw] cover">
              <Image
                key={image}
                data={image.responsiveImage}
                alt={image.alt}
                title={image.title}
                objectFit="cover"
                className="h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
