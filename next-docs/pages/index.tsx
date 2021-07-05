import React from 'react';

import Image from 'next/image';
import imageMoon from '../public/moon.png';

import SwiperCarousel from './components/swiper/Swiper';
import Future from '../components/landing/Future';
import ForDesigners from '../components/landing/ForDesigners';
import ForDevelopers from '../components/landing/ForDevelopers';

export default function Home() {
  return (
    <>
      <span className="block w-min whitespace-nowrap mb-8 text-active bg-active-80 uppercase tracking-widest py-2 px-4 rounded-lg font-bold">
        Open Source
      </span>
      <h1 className="text-6xl text-black tracking-tight font-semibold">
        Moon design system.
      </h1>
      <p className="text-2xl max-w-2xl mt-4 tracking-tight">
        Moon is Coingaming's product design system that helps us maintain the
        integrity of their user experience and optimize design and development
        resources.
      </p>
      <h2 className="mt-24 tracking-tight text-4xl font-semibold bg-background relative z-10 w-min whitespace-nowrap py-1 rounded-lg z-20">
        Updates.
      </h2>
      <p
        className="text-4xl tracking-tight bg-background relative z-10 w-min whitespace-nowrap
       pr-4 py-1 bg-opacity-25 z-20"
      >
        Explore our community features
      </p>

      <div className="breakout">
        <SwiperCarousel />
      </div>

      {/* For designers */}
      <ForDesigners />

      {/* For developers */}
      <ForDevelopers />

      {/* Moon image */}
      <div className="fixed right-0 top-250 z-10 w-5/12">
        <Image src={imageMoon} alt="Moon" />
      </div>

      <section className="mt-50">
        <Future />
      </section>

      <h2 className="mt-24 tracking-tight text-4xl font-semibold bg-background relative z-10 w-min whitespace-nowrap py-1 rounded-lg z-20">
        In the Spotlight.
      </h2>
      <p
        className="text-4xl tracking-tight bg-background relative z-10 w-min whitespace-nowrap
       pr-4 py-1 bg-opacity-25 z-20"
      >
        The team who design Moon.
      </p>
      <div className="breakout">
        <SwiperCarousel />
      </div>
    </>
  );
}
