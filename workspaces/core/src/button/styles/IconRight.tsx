import React from 'react';
import mergeClassNames from '../../mergeClassnames/mergeClassnames';
import getIconHorizontalPosition from '../private/utils/buttonStyles/getIconHorizontalPosition';
import type ButtonSettingsProps from '../private/types/ButtonSettingsProps';

const IconRight = ({ fullWidth, iconRight, size }: ButtonSettingsProps) => (
  <span
    aria-hidden="true"
    className={
      fullWidth
        ? mergeClassNames(
            'absolute block top-1/2 translate-y-[-50%]',
            getIconHorizontalPosition({ iconRight, size })
          )
        : ''
    }
  >
    {iconRight}
  </span>
);

export default IconRight;
