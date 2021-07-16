import React from 'react';
import Image from 'next/image';

import { rem } from '@heathmont/moon-utils';

import classNames from '../../utils/classNames';

interface Props {
  variant?: 'tiny' | 'tall';
  imageSrc: any;
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
const CardContributor: React.FC<Props> = ({ variant, name, imageSrc }) => (
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
      <Image
        className="z-10 rounded-lg"
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
