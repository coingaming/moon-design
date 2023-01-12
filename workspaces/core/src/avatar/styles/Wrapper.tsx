import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import setBorderRadius from '../private/utils/setBorderRadius';
import setWrapperSize from '../private/utils/setWrapperSize';
import type AvatarProps from '../private/types/AvatarProps';

const Wrapper: React.FC<AvatarProps> = ({
  children,
  size,
  imageUrl,
  color,
  bgColor,
  isRounded,
}) => (
  <div
    className={mergeClassnames(
      'overflow-hidden uppercase font-medium flex items-center justify-center bg-cover',
      color && color,
      bgColor && bgColor,
      setWrapperSize(size),
      setBorderRadius(size, isRounded)
    )}
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    {children}
  </div>
);

export default Wrapper;
