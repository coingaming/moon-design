import React from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import Loader from '../../../loader/Loader';
import type { ButtonSettingsProps } from '../types/ButtonProps';

const AnimationContent: React.FC<ButtonSettingsProps> = ({
  children,
  iconLeft,
  iconRight,
  iconOnly,
  animation,
}) => (
  <span className="block relative h-full pointer-events-none">
    <span className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] content-center justify-center">
      {animation === 'progress' && <Loader color="currentColor" size="xs" />}
      {animation === 'success' && (
        <GenericCheckAlternative className="text-moon-24" />
      )}
    </span>
    <span className="block opacity-0">
      {iconLeft}
      {children}
      {iconRight}
      {iconOnly}
    </span>
  </span>
);

export default AnimationContent;
