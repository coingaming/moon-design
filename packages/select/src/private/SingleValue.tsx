import React from 'react';
import { components, SingleValueProps } from 'react-select';
import type { BaseOptionType } from '../Select';
import type { SelectProps } from '../styles/CustomStyles';

const SingleValue = ({ children, ...rest }: SingleValueProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  const leftSlot = customProps?.leftSlot;
  const data = rest?.data as BaseOptionType;
  return (
    <components.SingleValue {...rest}>
      {leftSlot ? data.label : children}
    </components.SingleValue>
  );
};

export default SingleValue;
