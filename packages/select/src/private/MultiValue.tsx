import React from 'react';
import { components, MultiValueProps } from 'react-select';

// any - https://github.com/JedWatson/react-select/issues/4804
const MultiValue = ({ children, ...rest }: MultiValueProps<any>) => {
  return <components.MultiValue {...rest}>{children}</components.MultiValue>;
};

export default MultiValue;
