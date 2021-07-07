import React from 'react';
import Image from 'next/image';

import CardContributor from './CardContibutor';
import FacingReel from './FacingReel';

import imageDimaNikolaenko from '../../public/contributors/dimanikolaenko.png';
import imageKarlKallavus from '../../public/contributors/karlkallavus.png';
import imageMikitaLisavets from '../../public/contributors/mikitalisavets.jpg';
import imageEgertTamm from '../../public/contributors/egerttamm.png';
import imagePavelNavolochko from '../../public/contributors/pavelnavolochko.png';

const Contributors = () => (
  <FacingReel>
    <CardContributor
      name="Karl Kallavus"
      image={
        <Image
          className="z-10 rounded-lg w-max h-max"
          alt="Karl Kallavus"
          src={imageKarlKallavus}
          layout="intrinsic"
          quality={100}
        />
      }
    />
    <CardContributor
      name="Egert Tamm"
      image={
        <Image
          className="z-10 rounded-lg w-max h-max"
          alt="Egert Tamm"
          src={imageEgertTamm}
          layout="intrinsic"
          quality={100}
        />
      }
    />
    <CardContributor
      name="Dima Nikolaenko"
      image={
        <Image
          className="z-10 rounded-lg w-max h-max"
          alt="Dima Nikolaenko"
          src={imageDimaNikolaenko}
          layout="intrinsic"
          quality={100}
        />
      }
    />
    <CardContributor
      name="Pavel Navolochko"
      image={
        <Image
          className="z-10 rounded-lg w-max h-max"
          alt="Pavel Navolochko"
          src={imagePavelNavolochko}
          layout="intrinsic"
          quality={100}
        />
      }
    />
    <CardContributor
      name="Mikita Lisavets"
      image={
        <Image
          className="z-10 rounded-lg w-max h-max"
          alt="Mikita Lisavets"
          src={imageMikitaLisavets}
          layout="intrinsic"
          quality={100}
        />
      }
    />
  </FacingReel>
);

export default Contributors;
