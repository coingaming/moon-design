import React from 'react';
import { ControlsChevronDown } from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import ListboxButtonWrapper from './styles/ListboxButtonWrapper';

interface ListboxButtonContainerProps {
  disabled?: boolean;
  isExpanded?: boolean;
  inputSize?: 'small' | 'medium';
  controlledValue?: string;
  error?: boolean;
}

const ListboxButtonComponent: React.FC<ListboxButtonContainerProps> = ({
  disabled,
  isExpanded,
  inputSize,
  controlledValue,
  error,
}) => {
  if (controlledValue) {
    return (
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
  }
  return (
    <ListboxButtonWrapper
      arrow={<ControlsChevronDown fontSize={rem(24)} color="bulma.100" />}
      disabled={disabled}
      isexpanded={isExpanded ? 'true' : undefined}
      inputsize={inputSize}
      error={error ? 'true' : undefined}
    />
  );
};

export default ListboxButtonComponent;
