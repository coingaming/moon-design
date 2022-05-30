import React from 'react';
import classNames from '../../private/utils/classnames';
import setWrapperSize from '../private/utils/setWrapperSize';
import type AvatarProps from '../private/types/AvatarProps';

const Wrapper: React.FC<AvatarProps> = ({
  children,
  size,
  imageUrl,
  color,
  backgroundColor,
}) => {
  return (
    <div
      className={classNames(
        'overflow-hidden uppercase font-medium flex items-center justify-center bg-cover',
        color && color,
        backgroundColor && backgroundColor,
        // imageUrl && `bg-[url('${imageUrl}')]`,
        setWrapperSize(size)
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
