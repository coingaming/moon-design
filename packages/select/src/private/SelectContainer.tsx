import React from 'react';
import { components, ContainerProps } from 'react-select';
import SelectLabel from '../styles/SelectLabel';
import HintText from '../styles/HintText';
import type { SelectProps } from '../styles/CustomStyles';

// any - https://github.com/JedWatson/react-select/issues/4804
const SelectContainer = ({ children, ...rest }: ContainerProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  const size = customProps?.size;
  const label = customProps.label;
  const hint = customProps.hintSlot;
  const error = customProps.isError;
  return (
    <>
      <components.SelectContainer {...rest}>
        {size === 'large' && label && <SelectLabel>{label}</SelectLabel>}
        {children}
      </components.SelectContainer>
      {hint && <HintText isError={error}>{hint}</HintText>}
    </>
  );
};

export default SelectContainer;
