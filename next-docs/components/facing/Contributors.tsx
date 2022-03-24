import React from 'react';
import imageDimaNikolaenko from '../../public/contributors/dimanikolaenko.png';
import imageEgertTamm from '../../public/contributors/egerttamm.png';
import imagePavelNavolochko from '../../public/contributors/pavelnavolochko.png';
import CardContributor from './CardContibutor';
import FacingReel from './FacingReel';

const Contributors = () => (
  <FacingReel>
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
  </FacingReel>
);

export default Contributors;
