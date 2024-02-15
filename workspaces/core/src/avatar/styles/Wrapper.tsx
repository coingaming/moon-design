import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type AvatarProps from '../private/types/AvatarProps';
import getBorderRadius from '../private/utils/getBorderRadius';
import getWrapperSize from '../private/utils/getWrapperSize';

const Wrapper = ({
  children,
  size,
  imageUrl,
  color,
  bgColor,
  isRounded,
  className,
}: AvatarProps) => (
  <div
    className={mergeClassnames(
      'relative overflow-hidden uppercase font-medium flex items-center justify-center bg-cover',
      'text-bulma bg-goku',
      color,
      bgColor,
      getWrapperSize(size),
      getBorderRadius(size, isRounded),
      className
    )}
    style={{ backgroundImage: imageUrl && `url('${imageUrl}')` }}
  >
    {children}
  </div>
);

export default Wrapper;
