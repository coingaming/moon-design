import React from 'react';
import getIconSize from '../../../button/private/utils/buttonSizes/getIconSize';
import getLoaderSize from '../../../button/private/utils/buttonSizes/getLoaderSize';
import getLoaderColor from '../../../button/private/utils/buttonStyles/getLoaderColor';
import Loader from '../../../loader/Loader';
import GenericCheckAlternative from '../../../private/icons/GenericCheckAlternative';
import type { IconButtonSettingsProps } from '../types/IconButtonProps';

const AnimationContent = ({
  children,
  icon,
  animation,
  size,
  variant,
}: IconButtonSettingsProps) => (
  <span className="block relative h-full pointer-events-none">
    <span className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 content-center justify-center">
      {animation === 'progress' && (
        <Loader color={getLoaderColor(variant)} size={getLoaderSize(size)} />
      )}
      {animation === 'success' && (
        <GenericCheckAlternative
          aria-label="Success"
          className={getIconSize(size)}
        />
      )}
    </span>
    <span className="block opacity-0">
      {icon}
      {children}
    </span>
  </span>
);

export default AnimationContent;
