// @ts-nocheck
import React from 'react';
import { components, SelectContainerProps } from 'react-select';
import SelectLabel from '../styles/SelectLabel';
import HintText from '../styles/HintText';

const SelectContainer = ({ children, ...rest }: SelectContainerProps) => {
  const customProps = rest.selectProps['data-customProps'];
  const size = customProps?.size;
  const label = customProps.label;
  const hint = customProps.hintSlot;
  return (
    <components.SelectContainer {...rest}>
      {size === 'large' && label && <SelectLabel>{label}</SelectLabel>}
      {children}
      {hint && <HintText>{hint}</HintText>}
    </components.SelectContainer>
  );
};

export default SelectContainer;
