import React from 'react';

import CardContributor from './CardContibutor';
import FacingReel from './FacingReel';

import imageDimaNikolaenko from '../../public/contributors/dimanikolaenko.png';
import imageKarlKallavus from '../../public/contributors/karlkallavus.png';
import imageMikitaLisavets from '../../public/contributors/mikitalisavets.jpg';
import imageEgertTamm from '../../public/contributors/egerttamm.png';
import imagePavelNavolochko from '../../public/contributors/pavelnavolochko.png';

const Contributors = () => (
  <FacingReel>
    <CardContributor name="Karl Kallavus" imageSrc={imageKarlKallavus} />
    <CardContributor
      variant="tiny"
      name="Egert Tamm"
      imageSrc={imageEgertTamm}
    />
    <CardContributor
      variant="tall"
      name="Dima Nikolaenko"
      imageSrc={imageDimaNikolaenko}
    />
    <CardContributor
      variant="tiny"
      name="Pavel Navolochko"
      imageSrc={imagePavelNavolochko}
    />
    <CardContributor name="Mikita Lisavets" imageSrc={imageMikitaLisavets} />
  </FacingReel>
);

export default Contributors;
