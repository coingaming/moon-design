import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getIconSize from '../private/utils/buttonSizes/getIconSize';
import getIconHorizontalPosition from '../private/utils/buttonStyles/getIconHorizontalPosition';
import type ButtonSettingsProps from '../private/types/ButtonSettingsProps';

const IconLeft = ({ fullWidth, iconLeft, size }: ButtonSettingsProps) => (
  <span
    aria-hidden="true"
    className={mergeClassnames(
      getIconSize(size),
      fullWidth &&
        `absolute block top-1/2 translate-y-[-50%] ${getIconHorizontalPosition({
          iconLeft,
          size,
        })}`
    )}
  >
    {iconLeft}
  </span>
);

export default IconLeft;
