import React from 'react';
import Loader from '../../../../loader/Loader';
import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import GenericCheckAlternative from '../../../../private/icons/GenericCheckAlternative';
import IconLeft from '../../../styles/IconLeft';
import IconRight from '../../../styles/IconRight';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';
import getIconSize from '../buttonSizes/getIconSize';
import getLoaderSize from '../buttonSizes/getLoaderSize';
import getLoaderColor from '../buttonStyles/getLoaderColor';

const AnimationContent = ({
  children,
  iconLeft,
  iconRight,
  animation,
  size,
  fullWidth,
  variant,
}: ButtonSettingsProps) => (
  <span className="block h-full pointer-events-none">
    <span
      className={mergeClassnames(
        'flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 content-center',
        'justify-center'
      )}
    >
      {animation === 'progress' && (
        <Loader size={getLoaderSize(size)} color={getLoaderColor(variant)} />
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
    </span>
  </span>
);

export default AnimationContent;
