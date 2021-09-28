import React from 'react';
import { ControlsChevronDown } from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import ListboxButtonWrapper from '../styles/ListboxButtonWrapper';

interface PrimaryControledProps {
  disabled?: boolean;
  isExpanded?: boolean;
  inputSize?: 'small' | 'medium';
  controlledValue?: string;
  error?: boolean;
}

const PrimaryControled: React.FC<PrimaryControledProps> = ({
  disabled,
  isExpanded,
  inputSize,
  error,
  controlledValue,
}) => (
  <ListboxButtonWrapper
    arrow={<ControlsChevronDown fontSize={rem(24)} color="bulma.100" />}
    disabled={disabled}
    isexpanded={isExpanded ? 'true' : undefined}
    inputsize={inputSize}
    error={error ? 'true' : undefined}
  >
    {controlledValue}
  </ListboxButtonWrapper>
);

export default PrimaryControled;
