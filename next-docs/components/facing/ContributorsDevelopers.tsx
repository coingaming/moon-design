import React from 'react';
import imageDmytroKireiev from '../../public/contributors/dmytrokireiev.jpg';
import imageKarlKallavus from '../../public/contributors/karlkallavus.png';
import imageMikitaLisavets from '../../public/contributors/mikitalisavets.jpg';
import imageYulianaYarema from '../../public/contributors/yulianayarema.jpg';
import CardContributor from './CardContibutor';
import FacingReel from './FacingReel';

const Contributors = () => (
  <FacingReel>
    <CardContributor
      name="Karl Kallavus"
      title="Lead Developer"
      imageSrc={imageKarlKallavus}
    />
    <CardContributor
      variant="tiny"
      name="Dmytro Kireiev"
      title="Product Owner"
      imageSrc={imageDmytroKireiev}
    />
    <CardContributor
      name="Mikita Lisavets"
      title="Developer"
      imageSrc={imageMikitaLisavets}
    />
    <CardContributor
      variant="tiny"
      name="Yuliana Yarema"
      title="Developer"
      imageSrc={imageYulianaYarema}
    />
  </FacingReel>
);

export default Contributors;
