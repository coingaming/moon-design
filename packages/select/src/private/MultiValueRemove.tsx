import React from 'react';
import { components, MultiValueRemoveProps } from 'react-select';
import { ControlsClose } from '@heathmont/moon-icons';

// any - https://github.com/JedWatson/react-select/issues/4804
const MultiValueRemove = ({ ...rest }: MultiValueRemoveProps<any>) => (
  <components.MultiValueRemove {...rest}>
    <ControlsClose fontSize="1rem" color="goten.100" />
  </components.MultiValueRemove>
);

export default MultiValueRemove;
