import React from 'react';
import classNames from '../../private/utils/classnames';
import setFontSize from '../private/utils/setFontSize';
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
    className={classNames(
      'flex items-center rounded-moon-i-xs gap-1',
      setSpacing({ size, iconRight, iconLeft }),
      setFontSize({ isUppercase, size }),
      color && color,
      bgColor && bgColor
    )}
  >
    {children}
  </div>
);

export default LabelContainer;
