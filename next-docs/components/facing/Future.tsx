import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imageFuture from '../../public/future.png';
import TopRightArrowIcon from '../icons/TopRightArrowIcon';

const Future = () => (
  <Link href="/howToContribute">
    <a className="max-w-screen-lg group block relative rounded-moon-s-lg px-14 py-8">
      <h3 className="relative text-goten text-moon-48 font-medium z-10">
        Want to contribute?
      </h3>
      <p className="mt-6 max-w-md relative text-moon-24 text-goten z-10 group-hover:underline">
        Start building with our HTML/CSS framework and rapidly go from prototype
        to production.
      </p>
      <div className="absolute top-8 right-14 text-goten z-10">
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
