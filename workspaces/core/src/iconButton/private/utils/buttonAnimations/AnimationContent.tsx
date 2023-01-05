import React from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import Loader from '../../../../loader/Loader';
import type { IconButtonSettingsProps } from '../../types/IconButtonProps';

const AnimationContent: React.FC<IconButtonSettingsProps> = ({
  children,
  icon,
  animation,
}) => (
  <span className="block relative h-full pointer-events-none">
    <span className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] content-center justify-center">
      {animation === 'progress' && <Loader color="currentColor" size="xs" />}
      {animation === 'success' && (
        <GenericCheckAlternative
          aria-label="Success"
          className="text-moon-24"
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
