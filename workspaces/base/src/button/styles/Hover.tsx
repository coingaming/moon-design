import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';

type HoverProps = {
  className?: string;
};
const Hover = ({ className }: HoverProps) => (
  <span
    aria-hidden="true"
    className={mergeClassnames(
      'hover z-[-1] block absolute inset-0 pointer-events-none',
      'transition-[background-color_0.2s_ease-in-out]',
      'hover:bg-heles',
      className
    )}
  />
);

export default Hover;
