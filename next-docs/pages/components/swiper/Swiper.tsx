import React from 'react';
import SwiperItem from './SwiperItem';

const SwiperCarousel = () => (
  <div className="flex flex-row gap-8 overflow-x-auto reel">
    <SwiperItem />

    <div className="mt-8">
      <SwiperItem variant="vertical" />
    </div>

    <div className="mt-16">
      <SwiperItem variant="horizontal" />
    </div>

    <SwiperItem variant="vertical" />

    <SwiperItem />
    <SwiperItem variant="vertical" />

    <SwiperItem />

    <SwiperItem variant="vertical" />
  </div>
);

export default SwiperCarousel;
