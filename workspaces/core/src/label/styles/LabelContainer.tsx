import React from 'react';
import classNames from '../../private/utils/classnames';
import setFontSize from '../utils/setFontSize';
import setSpacing from '../utils/setSpacing';
import type LabelProps from '../private/types/LabelProps';

const LabelContainer: React.FC<LabelProps> = ({
  size,
  iconLeft,
  iconRight,
  isUppercase,
  color,
  backgroundColor,
  children,
}) => (
  <div
    className={classNames(
      'flex items-center rounded-moon-i-xs gap-1',
      setSpacing({ size, iconRight, iconLeft }),
      setFontSize({ isUppercase, size }),
      color && color,
      backgroundColor && backgroundColor
    )}
  >
    {children}
  </div>
);

export default LabelContainer;
