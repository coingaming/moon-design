import React from 'react';
import { components, MultiValueRemoveProps } from 'react-select';
import { ControlsClose } from '@heathmont/moon-icons';

const MultiValueRemove = ({ ...rest }: MultiValueRemoveProps<any>) => (
  <components.MultiValueRemove {...rest}>
    <ControlsClose fontSize="1rem" color="goten.100" />
  </components.MultiValueRemove>
);

export default MultiValueRemove;
