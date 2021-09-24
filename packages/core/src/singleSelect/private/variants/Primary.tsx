import React from 'react';
import { ControlsChevronDown } from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import ListboxButtonWrapper from '../styles/ListboxButtonWrapper';

interface PrimaryProps {
  disabled?: boolean;
  isExpanded?: boolean;
  inputSize?: 'small' | 'medium';
  error?: boolean;
}

const Primary: React.FC<PrimaryProps> = ({
  disabled,
  isExpanded,
  inputSize,
  error,
}) => (
  <ListboxButtonWrapper
    arrow={<ControlsChevronDown fontSize={rem(24)} color="bulma.100" />}
    disabled={disabled}
    isexpanded={isExpanded ? 'true' : undefined}
    inputsize={inputSize}
    error={error ? 'true' : undefined}
  />
);

export default Primary;
