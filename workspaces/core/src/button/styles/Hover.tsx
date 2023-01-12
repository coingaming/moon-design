import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';

type Props = {
  isHover: boolean;
};

const Hover: React.FC<Props> = ({ isHover }) => (
  <span
    aria-hidden="true"
    className={mergeClassnames(
      'z-[-1] block absolute inset-0 pointer-events-none',
      'transition-[background-color_0.2s_ease-in-out]',
      isHover && 'bg-bulma/[.07]'
    )}
  />
);

export default Hover;
