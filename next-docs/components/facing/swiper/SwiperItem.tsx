import React from 'react';
import classNames from '../../../utils/classNames';

interface Props {
  variant?: 'horizontal' | 'vertical';
}
const SwiperItem: React.FC<Props> = ({ variant }) => (
  <div
    className={classNames(
      variant === 'vertical' ? 'carousel-item--vertical' : 'carousel-item',
      ` relative flex flex-col justify-end px-6 pt-4 pb-8 bg-white rounded-lg`
    )}
  >
    <p className="absolute top-12 left-10 transform -rotate-90 origin-bottom-left w-min font-semibold">
      .tools
    </p>
    <p className="text-2xl font-semibold tracking-tight">
      How moon organises work in <br />
      figma to improve collaboration
    </p>
  </div>
);

export default SwiperItem;
