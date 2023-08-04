import React from 'react';
import Loader from '../../../../loader/Loader';
import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import GenericCheckAlternative from '../../../../private/icons/GenericCheckAlternative';
import IconLeft from '../../../styles/IconLeft';
import IconRight from '../../../styles/IconRight';
import getIconSize from '../buttonSizes/getIconSize';
import getLoaderSize from '../buttonSizes/getLoaderSize';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const AnimationContent = ({
  children,
  iconLeft,
  iconRight,
  iconOnly,
  animation,
  size,
  fullWidth,
}: ButtonSettingsProps) => (
  <span className="block h-full pointer-events-none">
    <span
      className={mergeClassnames(
        'flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] content-center',
        'justify-center'
      )}
    >
      {animation === 'progress' && (
        <Loader color="currentColor" size={getLoaderSize(size)} />
      )}
      {animation === 'success' && (
        <GenericCheckAlternative
          aria-label="Success"
          className={getIconSize(size)}
        />
      )}
    </span>
    <span className="flex gap-2 items-center opacity-0">
      {iconLeft && (
        <IconLeft fullWidth={fullWidth} iconLeft={iconLeft} size={size} />
      )}
      {children}
      {iconRight && (
        <IconRight fullWidth={fullWidth} iconRight={iconRight} size={size} />
      )}
      {iconOnly}
    </span>
  </span>
);

export default AnimationContent;
