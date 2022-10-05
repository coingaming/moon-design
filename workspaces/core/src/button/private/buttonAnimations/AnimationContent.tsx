import React from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import Loader from '../../../loader/Loader';
import type { ButtonSettingsProps } from '../types/ButtonProps';

type AnimationContentProps = {
  children?: React.ReactNode;
} & ButtonSettingsProps;

const AnimationContent: React.FC<AnimationContentProps> = ({
  children,
  iconLeft,
  iconRight,
  iconOnly,
  animation,
}) => (
  <div className="relative h-full pointer-events-none">
    <div className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] content-center justify-center">
      {animation === 'progress' && <Loader color="currentColor" size="xs" />}
      {animation === 'success' && (
        <GenericCheckAlternative className="text-moon-24" />
      )}
    </div>
    <div className="opacity-0">
      {iconLeft}
      {children}
      {iconRight}
      {iconOnly}
    </div>
  </div>
);

export default AnimationContent;
