import React from 'react';

import CardContributor from './CardContibutor';
import FacingReel from './FacingReel';

import imageDimaNikolaenko from '../../public/contributors/dimanikolaenko.png';
import imageKarlKallavus from '../../public/contributors/karlkallavus.png';
import imageMikitaLisavets from '../../public/contributors/mikitalisavets.jpg';
import imageEgertTamm from '../../public/contributors/egerttamm.png';
import imagePavelNavolochko from '../../public/contributors/pavelnavolochko.png';
import imageDmytroKireiev from '../../public/contributors/dmytrokireiev.jpg';

const Contributors = () => (
  <FacingReel>
    <CardContributor
      name="Karl Kallavus"
      title="Lead Developer"
      imageSrc={imageKarlKallavus}
    />
    <CardContributor
      variant="tiny"
      name="Egert Tamm"
      title="Art Director"
      imageSrc={imageEgertTamm}
    />
    <CardContributor
      variant="tall"
      name="Dima Nikolaenko"
      title="Lead Product Designer"
      imageSrc={imageDimaNikolaenko}
    />
    <CardContributor
      variant="tiny"
      name="Pavel Navolochko"
      title="Head of Design"
      imageSrc={imagePavelNavolochko}
    />
    <CardContributor
      name="Mikita Lisavets"
      title="Developer"
      imageSrc={imageMikitaLisavets}
    />
    <CardContributor
      variant="tiny"
      name="Dmytro Kireiev"
      title="Developer"
      imageSrc={imageDmytroKireiev}
    />
  </FacingReel>
);

export default Contributors;
