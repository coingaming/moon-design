import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';

const Hover = ({ isHover }: { isHover: boolean }) => (
  <span
    aria-hidden="true"
    className={mergeClassnames(
      'z-[-1] block absolute inset-0 pointer-events-none',
      'transition-[background-color_0.2s_ease-in-out]',
      isHover && 'bg-heles'
    )}
  />
);

export default Hover;
