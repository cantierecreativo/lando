import { Image } from "react-datocms";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Cover({ block }) {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        keyboard={true}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {block.images && Object.values(block.images).map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              data={image.responsiveImage}
              alt={image.alt}
              title={image.title}
              layout="responsive"
              objectFit="cover"
              className="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
