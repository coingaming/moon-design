import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import SwiperItem from './SwiperItem';

const SwiperCarousel = () => (
  <Swiper
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={false}
    pagination={{
      clickable: true,
    }}
    className="my-12"
  >
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperItem />
    </SwiperSlide>
  </Swiper>
);

export default SwiperCarousel;
