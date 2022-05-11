import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imageFuture from '../../public/future.png';
import TopRightArrowIcon from '../icons/TopRightArrowIcon';

const Future = () => (
  <Link href="/howToContribute">
    <a className="max-w-screen-lg group block relative rounded-lg p-11">
      <h2 className="relative text-white text-5xl tracking-tight z-10">
        Want to contribute?
      </h2>
      <p className="mt-8 md:w-1/2 relative text-2xl text-white z-10 group-hover:underline">
        Start building with our HTML/CSS framework and rapidly go from prototype
        to production.
      </p>
      <div className="absolute top-11 right-11 text-white z-10">
        <TopRightArrowIcon />
      </div>
      <div className="w-full md:h-full">
        <Image
          className="rounded-3xl object-left"
          alt="Future"
          src={imageFuture}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </a>
  </Link>
);

export default Future;
