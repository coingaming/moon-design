import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { DropdownIndicatorProps } from 'react-select';
import ControlsChevronDown from '../private/icons/ControlsChevronDown';
import ControlsChevronUp from '../private/icons/ControlsChevronUp';

// any - https://github.com/JedWatson/react-select/issues/4804
const DropdownIndicator = ({ ...rest }: DropdownIndicatorProps<any>) => {
  const IndicatorComponent = rest.selectProps.menuIsOpen
    ? ControlsChevronUp
    : ControlsChevronDown;
  return (
    <IndicatorComponent style={{ marginInlineEnd: rem(8) }} fontSize="1.5rem" />
  );
};

export default DropdownIndicator;
