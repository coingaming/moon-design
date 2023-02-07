import React from 'react';
import { ArrowsTopRight } from '@heathmont/moon-icons-tw';
import Image from 'next/image';
import Link from 'next/link';
import imageFutureBg from '../../public/future_bg.png';
import imageFutureImage from '../../public/future_image.svg';

const Future = () => (
  <Link
    href="/howToContribute"
    className="group block relative p-6 md:px-14 md:py-8"
  >
    <div className="flex justify-between align-start">
      <div className="flex flex-col gap-6">
        <h3 className="relative text-goten text-moon-48 font-medium z-1">
          Want to contribute?
        </h3>
        <p className="max-w-md relative text-moon-24 text-goten z-1">
          Start building with our HTML/CSS framework and rapidly go from
          prototype to production.
        </p>
      </div>
      <div className="hidden md:block relative z-1">
        <Image alt="Future" src={imageFutureImage} />
      </div>
      <div className="absolute md:static top-6 ltr:right-6 rtl:left-6 text-goten z-1 rtl:-rotate-90 text-moon-32">
        <ArrowsTopRight />
      </div>
    </div>
    <Image
      className="absolute inset-0 h-full rounded-moon-s-lg object-left object-cover"
      src={imageFutureBg}
      quality={100}
      alt="Want to contribute?"
    />
  </Link>
);

export default Future;
