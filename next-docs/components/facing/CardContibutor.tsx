import React from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import Image, { StaticImageData } from 'next/image';

type Props = {
  variant?: 'default' | 'tiny' | 'tall';
  title?: string;
  imageSrc: StaticImageData;
  name: string;
};

const variants = {
  tall: 'md:w-[24rem] md:h-[28rem]',
  tiny: 'md:w-[16rem] md:h-[20rem]',
  default: 'md:w-[24rem] md:h-[24rem]',
};

const CardContributor: React.FC<Props> = ({
  variant = 'default',
  name,
  title,
  imageSrc,
}) => (
  <div className="flex flex-col">
    <div
      className={mergeClassnames(
        'relative w-72 h-96',
        variant && variant in variants ? variants[variant] : variants.default
      )}
    >
      <p className="list-item absolute bottom-12 pb-2 ltr:left-full rtl:right-full whitespace-nowrap text-goten text-moon-24 transform origin-bottom-left -rotate-90 z-10 font-medium drop-shadow-sm">
        {title}
      </p>
      <Image
        className="rounded-moon-s-lg"
        alt={name}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <p className="text-moon-24 mt-2 font-medium">{name}</p>
  </div>
);

export default CardContributor;
