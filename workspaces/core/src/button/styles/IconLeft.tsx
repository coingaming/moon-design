import React from 'react';
import mergeClassNames from '../../utils/mergeClassnames';
import getIconHorizontalPosition from '../private/utils/buttonStyles/getIconHorizontalPosition';
import type ButtonSettingsProps from '../private/types/ButtonSettingsProps';

const IconLeft = ({ fullWidth, iconLeft, size }: ButtonSettingsProps) => (
  <span
    className={
      fullWidth
        ? mergeClassNames(
            'absolute block top-1/2 translate-y-[-50%]',
            getIconHorizontalPosition({ iconLeft, size })
          )
        : ''
    }
  >
    {iconLeft}
  </span>
);

export default IconLeft;
