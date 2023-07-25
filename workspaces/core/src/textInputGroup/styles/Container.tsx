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
        'after:content-[""] after:absolute after:top-0 after:bottom-0 after:w-px after:left-1/2 after:translate-x-[-50%] after:bg-beerus after:x-[3] hover:after:hidden focus-within:after:hidden',
      orientation === 'vertical' &&
        !isError &&
        'after:content-[""] after:absolute after:top-1/2 after:bottom-0 after:w-full after:h-px after:left-0 after:translate-y-[-50%] after:bg-beerus after:x-[3] hover:after:hidden focus-within:after:hidden'
    )}
  >
    {children}
  </div>
);

export default Container;
