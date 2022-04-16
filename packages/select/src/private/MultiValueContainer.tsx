import React from 'react';
import { Label } from '@heathmont/moon-core';

//TODO: check Label size according to new size system
const MultiValueContainer = ({ ...rest }) => {
  const size = rest.selectProps['data-customProps'].size;

  return (
    <Label
      color="gohan.100"
      backgroundColor="piccolo.100"
      iconRight={rest.children[1]}
      size={size === 'xLarge' ? 'twoxsmall' : 'xsmall'}
    >
      {rest.data.label}
    </Label>
  );
};

export default MultiValueContainer;
