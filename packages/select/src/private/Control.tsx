// @ts-nocheck
import React from 'react';
import { components, ControlProps } from 'react-select';

const Control = ({ children, ...rest }: ControlProps) => {
  const leftSlot = rest.selectProps['data-customProps']?.leftSlot;
  return (
    <components.Control {...rest}>
      {leftSlot && <div>{leftSlot}</div>}
      {children}
    </components.Control>
  );
};

export default Control;
