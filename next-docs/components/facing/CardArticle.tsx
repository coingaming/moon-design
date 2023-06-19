import React from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';

type Props = {
  variant?: 'default' | 'tall' | 'wide';
  title: string;
  section: string;
  href: string;
  author?: string;
};

const variants = {
  tall: 'md:w-[18rem] md:h-[28rem] md:pe-9',
  wide: 'md:w-[28rem] md:h-[18rem] md:pe-12',
  default: 'md:w-[24rem] md:h-[18rem] md:pe-12',
};

const CardArcticle: React.FC<Props> = ({
  variant = 'default',
  title,
  section,
  href,
  author,
}) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={mergeClassnames(
          `group relative w-72 h-96 flex flex-col justify-end p-6 bg-goku rounded-moon-s-lg`,
          variant && variant in variants ? variants[variant] : variants.default
        )}
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
      </a>
    </li>
  );
};

export default CardArcticle;
