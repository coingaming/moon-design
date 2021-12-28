// @ts-nocheck
import React from 'react';
import { components, SingleValueProps } from 'react-select';

const SingleValue = ({
  children,
  ...rest
}: SingleValueProps<BaseOptionType>) => {
  const leftSlot = rest.selectProps['data-customProps']?.leftSlot;
  return (
    <components.SingleValue {...rest}>
      {leftSlot ? rest.data.label : children}
    </components.SingleValue>
  );
};

export default SingleValue;
