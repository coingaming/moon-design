import React from 'react';
import { rem } from '@heathmont/moon-utils';
import classNames from '../../utils/classNames';

type Props = {
  variant?: 'default' | 'tall' | 'wide';
  title: string;
  section: string;
  href: string;
  author?: string;
};

const variants = {
  default: {
    width: rem(384),
    height: rem(288),
  },
  tall: {
    width: rem(288),
    height: rem(448),
  },
  wide: {
    width: rem(448),
    height: rem(288),
  },
};

const CardArcticle: React.FC<Props> = ({
  variant = 'default',
  title,
  section,
  href,
  author,
}) => (
  <a href={href} target="_blank" rel="noreferrer">
    <div
      className={classNames(
        variant === 'tall' ? 'pe-9' : 'pe-12',
        `group relative flex flex-col justify-end ps-6 py-6 bg-goku rounded-moon-s-lg`
      )}
      style={
        variant && variant in variants ? variants[variant] : variants.default
      }
    >
      <p className="list-item absolute top-10 ltr:left-10 rtl:right-10 transform -rotate-90 origin-bottom-left text-moon-16 font-medium">
        {section}
      </p>
      {author && (
        <p className="absolute top-0 ltr:right-6 rtl:left-6 transform -rotate-90 origin-bottom-right text-moon-16 font-medium">
          {author}
        </p>
      )}
      <p className="text-moon-24 font-medium">{title}</p>
    </div>
  </a>
);

export default CardArcticle;
