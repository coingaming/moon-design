import React from 'react';
import { rem } from '@heathmont/moon-utils';
import Image, { StaticImageData } from 'next/image';

type Props = {
  variant?: 'default' | 'tiny' | 'tall';
  title?: string;
  imageSrc: StaticImageData;
  name: string;
};

const variants = {
  default: {
    width: rem(384),
    height: rem(384),
  },
  tiny: {
    width: rem(256),
    height: rem(320),
  },
  tall: {
    width: rem(384),
    height: rem(448),
  },
};

const CardContributor: React.FC<Props> = ({
  variant = 'default',
  name,
  title,
  imageSrc,
}) => (
  <div className="flex flex-col">
    <div
      className="relative"
      style={
        variant && variant in variants ? variants[variant] : variants.default
      }
    >
      <p className="list-item absolute bottom-12 pb-2 left-full whitespace-nowrap text-goten text-moon-24 transform origin-bottom-left -rotate-90 z-10 font-medium">
        {title}
      </p>
      <Image
        className="rounded-moon-s-lg"
        alt={name}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className="text-moon-24 mt-2 font-medium">{name}</p>
  </div>
);

export default CardContributor;
