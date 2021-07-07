import React from 'react';
import classNames from '../../utils/classNames';

interface Props {
  variant?: 'horizontal' | 'vertical';
  title: string;
  section: string;
}
const CardArcticle: React.FC<Props> = ({ variant, title, section}) => (
  <div
    className={classNames(
      variant === 'vertical' ? 'carousel-item--vertical' : 'carousel-item',
      ` relative flex flex-col justify-end px-6 pt-4 pb-8 bg-white rounded-lg`
    )}
  >
    <p className="absolute top-12 left-10 transform -rotate-90 origin-bottom-left w-min font-semibold">
      {section}
    </p>
    <p className="text-2xl font-semibold tracking-tight w-10/12">
      {title}
    </p>
  </div>
);

export default CardArcticle;
