import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type ButtonVariants from '../private/types/ButtonVariants';

const Hover = ({
  isHover,
  variant,
}: {
  isHover: boolean;
  variant: ButtonVariants;
}) => {
  const hoverBackground = variant === 'ghost' ? 'bg-jiren' : 'bg-heles';
  return (
    <span
      aria-hidden="true"
      className={mergeClassnames(
        'z-[-1] block absolute inset-0 pointer-events-none',
        'transition-[background-color_0.2s_ease-in-out]',
        isHover && hoverBackground
      )}
    />
  );
};

export default Hover;
