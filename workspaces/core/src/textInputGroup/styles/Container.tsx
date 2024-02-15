import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type ContainerProps from '../private/types/ContainerProps';

const Container = ({
  orientation,
  isXLarge,
  dir,
  backgroundColor,
  isError,
  children,
}: ContainerProps) => (
  <div
    dir={dir}
    className={mergeClassnames(
      'flex border-none shadow-input relative h-fit',
      orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      backgroundColor && backgroundColor,
      isXLarge ? 'rounded-moon-i-md' : 'rounded-moon-i-sm',
      orientation === 'horizontal' &&
        !isError &&
        'after:absolute after:inset-y-0 after:w-px after:left-1/2 after:-translate-x-1/2 after:bg-beerus after:x-[3] hover:after:hidden focus-within:after:hidden',
      orientation === 'vertical' &&
        !isError &&
        'after:absolute after:top-1/2 after:bottom-0 after:w-full after:h-px after:start-0 after:-translate-y-1/2 after:bg-beerus after:x-[3] hover:after:hidden focus-within:after:hidden'
    )}
  >
    {children}
  </div>
);

export default Container;
