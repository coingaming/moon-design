import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Phone',
  };

  return (
    <TextInputGroup
      inputProps={{
        input1: inputProps1,
        input2: inputProps2,
      }}
      isRtl
    />
  );
};

export default Example;
