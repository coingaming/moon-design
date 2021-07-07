import React from 'react';
import Image from 'next/image';

import imageFuture from '../../public/future.png';
import TopRightArrowIcon from '../icons/TopRightArrowIcon';

// TODO Proper Z-index
// TODO Make a link
const Future = () => (
  <div className="relative future rounded-lg p-11">
    <h2 className="relative text-white text-5xl z-20 tracking-tight">
      Want to contribute?
    </h2>
    <p className="mt-8 w-1/2 relative text-2xl text-white z-20">
      Start building with our HTML/CSS framework and rapidly go from prototype
      to production.
    </p>
    <div className="absolute top-11 right-11 text-white z-20">
      <TopRightArrowIcon />
    </div>
    <div className="w-full h-full">
      <Image
        className="z-10 rounded-lg"
        alt="Future"
        src={imageFuture}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
);

export default Future;
