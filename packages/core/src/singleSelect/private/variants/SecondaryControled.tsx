import React from 'react';
import { ControlsChevronDown } from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import ListboxButtonWrapper from '../styles/ListboxButtonWrapper';
import InnerLabel from './styles/InnerLabel';
import ValueWrapper from './styles/ValueWrapper';

interface SecondaryControledProps {
  disabled?: boolean;
  isExpanded?: boolean;
  inputSize?: 'small' | 'medium';
  controlledValue?: string;
  error?: boolean;
  selectLabel?: JSX.Element | string;
}

const SecondaryControled: React.FC<SecondaryControledProps> = ({
  disabled,
  isExpanded,
  inputSize,
  error,
  controlledValue,
  selectLabel,
}) => (
  <ListboxButtonWrapper
    arrow={<ControlsChevronDown fontSize={rem(24)} color="bulma.100" />}
    disabled={disabled}
    isexpanded={isExpanded ? 'true' : undefined}
    inputsize={inputSize}
    error={error ? 'true' : undefined}
  >
    <div>
      <InnerLabel>{selectLabel}</InnerLabel>
      <ValueWrapper>{controlledValue}</ValueWrapper>
    </div>
  </ListboxButtonWrapper>
);

export default SecondaryControled;
