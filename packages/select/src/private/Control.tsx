import React from 'react';
import { components, ControlProps } from 'react-select';
import type { SelectProps } from '../styles/CustomStyles';

const Control = ({ children, ...rest }: ControlProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  const leftSlot = customProps?.leftSlot;
  return (
    <components.Control {...rest}>
      {leftSlot && <div>{leftSlot}</div>}
      {children}
    </components.Control>
  );
};

export default Control;
