import React from 'react';
import classNames from '../private/utils/classnames';

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

export type LoaderProps = {
  color?: string;
  size?: string;
};

const loaderSize = (size?: string) => {
  switch (size) {
    case '2xs':
      return 'w-4 h-4';
    case 'xs':
      return 'w-6 h-6';
    case 'sm':
      return 'w-8 h-8';
    case 'md':
      return 'w-10 h-10';
    case 'lg':
      return 'w-12 h-12';
    default:
      return;
  }
};

const loaderDivBorder = (size?: string) => {
  switch (size) {
    case '2xs':
    case 'xs':
    case 'sm':
      return 'border-2 border-solid';
    case 'md':
    case 'lg':
      return 'border-4 border-solid';
    default:
      return;
  }
};

const Loader: React.FC<LoaderProps> = ({
  color = 'border-hit',
  size = 'md',
}) => (
  <div className={classNames(loaderSize(size), 'relative rounded-full')}>
    <div
      className={classNames(
        loaderDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      style={{ animationDelay: '-0.45s' }}
    />
    <div
      className={classNames(
        loaderDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      style={{ animationDelay: '-0.3s' }}
    />
    <div
      className={classNames(
        loaderDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      style={{ animationDelay: '-0.15s' }}
    />
    <div
      className={classNames(
        loaderDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
    />
  </div>
);
export default Loader;
