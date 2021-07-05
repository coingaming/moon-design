import React from 'react';

import Image from 'next/image';
import imageMoon from '../public/moon.png';

import SwiperCarousel from './components/swiper/Swiper';
import Future from '../components/landing/Future';
import TopRightArrowIcon from '../components/icons/TopRightArrowIcon';

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
      <p className="text-4xl tracking-tight bg-background relative z-10 w-min whitespace-nowrap rounded-lg pr-4 py-1 bg-opacity-25 z-20">
        Explore our community features
      </p>

      <div className="breakout">
        <SwiperCarousel />
      </div>

      {/* For designers */}
      <div className="md:fixed for-designers p-8 text-white rounded-t-lg rounded-bl-lg bg-designer z-20">
        <svg
          className="text-white mb-4"
          width="21"
          height="31"
          viewBox="0 0 21 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4648 10.8516C18.513 10.3297 19.354 9.46896 19.8516 8.409C20.3491 7.34904 20.4739 6.15207 20.2057 5.01228C19.9375 3.87249 19.292 2.85677 18.374 2.1299C17.456 1.40303 16.3194 1.00766 15.1484 1.00793H5.85157C4.68065 1.00766 3.54399 1.40303 2.626 2.1299C1.70801 2.85677 1.06255 3.87249 0.794349 5.01228C0.526143 6.15207 0.650925 7.34904 1.14845 8.409C1.64598 9.46896 2.48706 10.3297 3.53523 10.8516C2.67046 11.2819 1.94288 11.945 1.43428 12.7662C0.92569 13.5873 0.65625 14.5341 0.656257 15.5C0.656264 16.466 0.925718 17.4127 1.43432 18.2339C1.94293 19.0551 2.67052 19.7181 3.5353 20.1484C2.70711 20.5612 2.00422 21.1877 1.4993 21.9631C0.994384 22.7386 0.705777 23.6348 0.663324 24.5592C0.620871 25.4836 0.826113 26.4025 1.25783 27.221C1.68954 28.0395 2.33205 28.7277 3.11892 29.2147C3.90578 29.7016 4.80844 29.9695 5.73355 29.9907C6.65865 30.0118 7.57262 29.7855 8.38093 29.3351C9.18925 28.8846 9.86257 28.2265 10.3313 27.4286C10.8 26.6307 11.047 25.7221 11.0469 24.7968V18.6831C11.5251 19.2997 12.136 19.8006 12.8344 20.1486C13.5328 20.4966 14.3006 20.6828 15.0808 20.6933C15.861 20.7038 16.6335 20.5383 17.341 20.2092C18.0485 19.8801 18.6727 19.3958 19.1673 18.7923C19.6619 18.1888 20.0141 17.4816 20.1978 16.7232C20.3815 15.9649 20.3919 15.1749 20.2284 14.4119C20.0648 13.649 19.7314 12.9327 19.2529 12.3164C18.7745 11.7 18.1633 11.1993 17.4648 10.8516ZM19.25 6.20325C19.2488 7.2902 18.8166 8.33233 18.0483 9.10117C17.2799 9.87001 16.2381 10.3028 15.1511 10.3047L15.1484 10.3047L15.1432 10.3048L11.0469 10.3047V2.10168H15.1484C16.2359 2.10292 17.2784 2.53544 18.0473 3.30437C18.8163 4.07329 19.2488 5.11582 19.25 6.20325ZM11.9653 11.3985C11.6222 11.6653 11.3137 11.9738 11.0469 12.3169V11.3984L11.9653 11.3985ZM1.75001 6.20325C1.75124 5.11582 2.18376 4.07329 2.95269 3.30437C3.72161 2.53544 4.76415 2.10292 5.85157 2.10168H9.95313V10.3047H5.85157L5.84897 10.3047C4.76201 10.3028 3.72015 9.87001 2.95179 9.10117C2.18343 8.33234 1.75125 7.29021 1.75001 6.20325ZM5.85157 28.8983C5.31267 28.8987 4.77897 28.793 4.28097 28.587C3.78296 28.3811 3.33042 28.0791 2.94921 27.6982C2.568 27.3173 2.26558 26.865 2.05925 26.3671C1.85293 25.8693 1.74673 25.3357 1.74673 24.7968C1.74673 24.2579 1.85293 23.7243 2.05925 23.2264C2.26558 22.7286 2.568 22.2763 2.94921 21.8954C3.33042 21.5145 3.78296 21.2125 4.28097 21.0065C4.77897 20.8006 5.31267 20.6949 5.85157 20.6953L9.95313 20.6952V24.7968C9.9519 25.8842 9.51937 26.9267 8.75044 27.6956C7.98152 28.4646 6.93899 28.8971 5.85157 28.8983ZM9.95313 19.6014L5.85157 19.6015C4.76412 19.6014 3.72125 19.1693 2.95225 18.4005C2.18325 17.6316 1.75107 16.5888 1.75072 15.5013C1.75038 14.4139 2.1819 13.3708 2.95041 12.6014C3.71893 11.832 4.76152 11.3994 5.84897 11.3985L5.85157 11.3986L9.95313 11.3984V19.6014ZM15.1484 19.6015C14.0613 19.6012 13.0188 19.1693 12.25 18.4007C11.4812 17.6321 11.0489 16.5898 11.0482 15.5027C11.0475 14.4156 11.4785 13.3727 12.2463 12.6031C13.0141 11.8336 14.0561 11.4003 15.1432 11.3986H15.1484L15.151 11.3985C16.2382 11.3999 17.2803 11.8328 18.0484 12.6021C18.8165 13.3714 19.2477 14.4142 19.2474 15.5013C19.247 16.5884 18.8151 17.631 18.0465 18.3998C17.2779 19.1686 16.2356 19.6009 15.1484 19.6015Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>

        <div className="absolute top-11 right-11 text-white z-20">
          <TopRightArrowIcon />
        </div>

        <h2 className="text-2xl mb-7">For designers.</h2>
        <div>
          <a>Getting Started</a>
        </div>
      </div>

      {/* For developers */}
      <div className="md:fixed for-developers p-8 text-black rounded-b-lg rounded-tr-lg bg-developer z-20">
        <h2 className="text-2xl mb-7">For developers.</h2>
        <div>
          <a>Getting Started</a>
        </div>
      </div>

      {/* Moon image */}
      <div className="fixed right-0 top-250 z-10 w-5/12">
        <Image src={imageMoon} alt="Moon" />
      </div>

      <section className="mt-96">
        <Future />
      </section>
    </>
  );
}
