import React from 'react';
import CardArticle from './CardArticle';
import FacingReel from './FacingReel';
import SwiperItem from './swiper/SwiperItem';

const News = () => (
  <FacingReel>
    <CardArticle
      title="How moon organises work in
      figma to improve collaboration"
      section=".tools"
    />

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
  </FacingReel>
);

export default News;
