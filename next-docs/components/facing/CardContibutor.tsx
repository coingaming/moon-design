import React from 'react';
import { rem } from '@heathmont/moon-utils';
import Image from 'next/image';
import classNames from '../../utils/classNames';

interface Props {
  variant?: 'tiny' | 'tall';
  title?: string;
  imageSrc: StaticImageData;
  name: string;
}

const variants = {
  default: {
    minWidth: rem(368),
    minHeight: rem(378),
    maxWidth: rem(368),
    maxHeight: rem(378),
  },
  tiny: {
    minWidth: rem(275),
    minHeight: rem(355),
    maxWidth: rem(275),
    maxHeight: rem(355),
  },
  tall: {
    minWidth: rem(368),
    minHeight: rem(460),
    maxWidth: rem(368),
    maxHeight: rem(460),
  },
};
const CardContributor: React.FC<Props> = ({
  variant,
  name,
  title,
  imageSrc,
}) => (
  <div
    className={classNames(
      variant === 'tiny' ? 'mt-20' : '',
      variant === 'tall' ? 'mt-10' : '',
      'flex flex-col'
    )}
  >
    <div
      className="relative"
      style={
        variant && variant in variants ? variants[variant] : variants.default
      }
    >
      <div className="list-item absolute bottom-8 left-full whitespace-nowrap text-white text-2xl transform origin-bottom-left -rotate-90 z-10 font-semibold">
        {title}
      </div>
      <Image
        className="rounded-lg"
        alt={name}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className="text-2xl mt-2 font-semibold tracking-tight">{name}</p>
  </div>
);

export default CardContributor;
