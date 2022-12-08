import React from 'react';
import mergeClassnames from '../../utils/mergeClassnames';
import setFontSize from '../private/utils/setFontSize';
import setHeight from '../private/utils/setHeight';
import setSpacing from '../private/utils/setSpacing';
import type LabelProps from '../private/types/LabelProps';

const LabelContainer: React.FC<LabelProps> = ({
  size,
  iconLeft,
  iconRight,
  isUppercase,
  color,
  bgColor,
  children,
}) => (
  <div
    className={mergeClassnames(
      'flex items-center rounded-moon-i-xs gap-1 select-none',
      setSpacing({ size, iconRight, iconLeft }),
      setFontSize({ isUppercase, size }),
      setHeight({ size }),
      color && color,
      bgColor && bgColor
    )}
  >
    {children}
  </div>
);

export default LabelContainer;
