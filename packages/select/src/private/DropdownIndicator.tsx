import React from 'react';
import { DropdownIndicatorProps } from 'react-select';
import { rem } from '@heathmont/moon-utils';
import { ControlsChevronDown, ControlsChevronUp } from '@heathmont/moon-icons';

// any - https://github.com/JedWatson/react-select/issues/4804
const DropdownIndicator = ({ ...rest }: DropdownIndicatorProps<any>) => {
  const IndicatorComponent = rest.selectProps.menuIsOpen
    ? ControlsChevronUp
    : ControlsChevronDown;
  return (
    <IndicatorComponent style={{ marginRight: rem(8) }} fontSize="1.5rem" />
  );
};

export default DropdownIndicator;
