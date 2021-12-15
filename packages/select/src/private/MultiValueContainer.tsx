// @ts-nocheck
import React from 'react';
import { Label } from '@heathmont/moon-core';

//TODO: check Label size according to new size system
const MultiValueContainer = (props) => {
  const size = props.selectProps['data-customProps'].size;

  return (
    <Label
      color="gohan.100"
      backgroundColor="piccolo.100"
      iconRight={props.children[1]}
      size={size === 'xLarge' ? 'small' : 'medium'}
    >
      {props.data.label}
    </Label>
  );
};

export default MultiValueContainer;
