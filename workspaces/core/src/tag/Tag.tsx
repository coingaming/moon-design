import React from 'react';
import type TagProps from './private/types/TagProps';
import getFontSize from './private/utils/getFontSize';
import getIconSize from './private/utils/getIconSize';
import getSize from './private/utils/getSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Tag = ({
  children,
  color, // deprecated
  bgColor, // deprecated
  iconLeft,
  iconRight,
  size = 'xs',
  isUppercase = true,
  className,
}: TagProps) => (
  <div
    className={mergeClassnames(
      'flex items-center rounded-moon-i-xs gap-1 select-none text-goku bg-bulma',
      getSize({ size, iconRight, iconLeft }),
      getFontSize({ isUppercase, size }),
      color,
      bgColor,
      className
    )}
  >
    {iconLeft && <span className={getIconSize(size)}>{iconLeft}</span>}
    {children}
    {iconRight && <span className={getIconSize(size)}>{iconRight}</span>}
  </div>
);

export default Tag;
