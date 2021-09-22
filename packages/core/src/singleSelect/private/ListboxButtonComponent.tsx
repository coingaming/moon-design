import React from 'react';
import { ControlsChevronDown } from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import ListboxButtonWrapper from './styles/ListboxButtonWrapper';

interface ListboxButtonContainerProps {
  disabled?: boolean;
  isExpanded?: boolean;
  inputSize?: 'small' | 'medium';
  controlledValue?: string;
}

const ListboxButtonComponent: React.FC<ListboxButtonContainerProps> = ({
  disabled,
  isExpanded,
  inputSize,
  controlledValue,
}) => {
  if (controlledValue) {
    return (
      <ListboxButtonWrapper
        arrow={<ControlsChevronDown fontSize={rem(24)} color="bulma.100" />}
        disabled={disabled}
        isExpanded={isExpanded}
        inputSize={inputSize}
      >
        {controlledValue}
      </ListboxButtonWrapper>
    );
  }
  return (
    <ListboxButtonWrapper
      arrow={<ControlsChevronDown fontSize={rem(24)} color="bulma.100" />}
      disabled={disabled}
      isExpanded={isExpanded}
      inputSize={inputSize}
    />
  );
};

export default ListboxButtonComponent;
