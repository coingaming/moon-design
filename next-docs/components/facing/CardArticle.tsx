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
          `group relative w-72 h-96 flex flex-col justify-end p-6 bg-gohan rounded-moon-s-lg text-moon-16 font-medium`,
          variant && variant in variants ? variants[variant] : variants.default
        )}
      >
        <p className="list-item absolute ltr:top-8 rtl:top-0 ltr:start-10 rtl:start-6 -rotate-90 ltr:origin-bottom-left rtl:origin-bottom-right">
          {section}
        </p>
        {author && (
          <p className="absolute whitespace-nowrap ltr:top-0 rtl:top-6 ltr:end-10 rtl:start-full -rotate-90 ltr:origin-bottom-right rtl:origin-top-right rtl:translate-x-10">
            {author}
          </p>
        )}
        <p className="text-moon-24">{title}</p>
      </a>
    </li>
  );
};

export default CardArcticle;
