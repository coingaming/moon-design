import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import SwiperItem from './SwiperItem';

const SwiperCarousel = () => (
  <Swiper
    slidesPerView={3}
    spaceBetween={300}
    centeredSlides={false}
    pagination={{
      clickable: true,
    }}
    className="my-12 mySwiper"
  >
    {Array.from({ length: 10 }, (value, index) => (
      <SwiperSlide className="w-max">
        <SwiperItem />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperCarousel;
