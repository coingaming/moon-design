import React from 'react';
import Link from 'next/link';
import classNames from '../../utils/classNames';

type Props = {
  variant?: 'default' | 'tall';
  title: string;
  section: string;
  href: string;
  author?: string;
};

const CardArcticle: React.FC<Props> = ({
  variant = 'default',
  title,
  section,
  href,
  author,
}) => (
  <Link href={href}>
    <a
      className={classNames(
        variant === 'tall'
          ? 'carousel-item--vertical pr-9'
          : 'carousel-item pr-12',
        `group block relative flex flex-col justify-end pl-6 py-6 bg-goku rounded-moon-s-lg`
      )}
    >
      <p className="list-item absolute top-10 left-10 transform -rotate-90 origin-bottom-left text-moon-16 font-medium">
        {section}
      </p>
      {author && (
        <p className="absolute top-0 right-6 transform -rotate-90 origin-bottom-right text-moon-16 font-medium">
          {author}
        </p>
      )}
      <p className="group-hover:underline text-moon-24 font-medium">{title}</p>
    </a>
  </Link>
);

export default CardArcticle;
