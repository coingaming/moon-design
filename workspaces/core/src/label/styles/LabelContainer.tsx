import React from 'react';
import classNames from '../../private/utils/classnames';
import setFontSize from '../utils/setFontSize';
import setPadding from '../utils/setPadding';
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
      'flex items-center rounded-moon-i-xs leading-4',
      setPadding({ size, iconRight, iconLeft }),
      isUppercase && 'uppercase font-medium',
      setFontSize({ isUppercase, size }),
      isUppercase && size === '2xs'
        ? 'tracking-[0.031rem]'
        : 'tracking-[0.063]',
      color && color,
      backgroundColor && backgroundColor
    )}
  >
    {children}
  </div>
);

export default LabelContainer;
