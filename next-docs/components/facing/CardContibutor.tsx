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
  <li className="flex flex-col gap-2">
    <div
      className={mergeClassnames(
        'relative w-72 h-96',
        variant && variant in variants ? variants[variant] : variants.default
      )}
    >
      <p className="list-item absolute bottom-8 ltr:start-full rtl:end-10 whitespace-nowrap text-goten text-moon-24 ltr:origin-bottom-left rtl:origin-bottom-left -rotate-90 z-10 font-medium drop-shadow-sm">
        {title}
      </p>
      <Image
        className="h-full w-full rounded-moon-s-lg object-cover"
        alt={name}
        src={imageSrc}
      />
    </div>
    <p className="text-moon-24 font-medium">{name}</p>
  </li>
);

export default CardContributor;
