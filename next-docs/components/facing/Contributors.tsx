import React from 'react';
import imageDimaNikolaenko from '../../public/contributors/dimanikolaenko.png';
import imageDmytroKireiev from '../../public/contributors/dmytrokireiev.jpg';
import imageEgertTamm from '../../public/contributors/egerttamm.png';
import imageKarlKallavus from '../../public/contributors/karlkallavus.png';
import imageMikitaLisavets from '../../public/contributors/mikitalisavets.jpg';
import imagePavelNavolochko from '../../public/contributors/pavelnavolochko.png';
import imageYulianaYarema from '../../public/contributors/yulianayarema.jpg';
import CardContributor from './CardContibutor';
import FacingReel from './FacingReel';
import SectionTitle from './SectionTitle';

const Contributors = () => (
  <div className="flex flex-col gap-12">
    <SectionTitle
      title="In the Spotlight."
      description="The team who design Moon."
    />
    <FacingReel>
      <CardContributor
        name="Egert Tamm"
        title="Art Director"
        imageSrc={imageEgertTamm}
      />
      <CardContributor
        variant="tiny"
        name="Dima Nikolaenko"
        title="Lead Product Designer"
        imageSrc={imageDimaNikolaenko}
      />
      <CardContributor
        variant="tall"
        name="Pavel Navolochko"
        title="Head of Design"
        imageSrc={imagePavelNavolochko}
      />
      <CardContributor
        variant="tiny"
        name="Karl Kallavus"
        title="Lead Developer"
        imageSrc={imageKarlKallavus}
      />
      <CardContributor
        name="Dmytro Kireiev"
        title="Product Owner"
        imageSrc={imageDmytroKireiev}
      />
      <CardContributor
        variant="tiny"
        name="Mikita Lisavets"
        title="Developer"
        imageSrc={imageMikitaLisavets}
      />
      <CardContributor
        variant="tall"
        name="Yuliana Yarema"
        title="Developer"
        imageSrc={imageYulianaYarema}
      />
    </FacingReel>
  </div>
);

export default Contributors;
