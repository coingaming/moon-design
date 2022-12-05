import React from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import Loader from '../../../loader/Loader';
import type { IconButtonSettingsProps } from '../types/IconButtonProps';

type AnimationContentProps = {
  children?: React.ReactNode;
} & IconButtonSettingsProps;

const AnimationContent: React.FC<AnimationContentProps> = ({
  children,
  animation,
}) => (
  <span className="block relative h-full pointer-events-none">
    <span className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] content-center justify-center">
      {animation === 'progress' && <Loader color="currentColor" size="xs" />}
      {animation === 'success' && (
        <GenericCheckAlternative className="text-moon-24" />
      )}
    </span>
    <span className="block opacity-0">{children}</span>
  </span>
);

export default AnimationContent;
