// @ts-nocheck
import React from 'react';
import { components, MultiValueProps } from 'react-select';

const MultiValue = ({ children, ...rest }: MultiValueProps) => {
  return <components.MultiValue {...rest}>{children}</components.MultiValue>;
};

export default MultiValue;
