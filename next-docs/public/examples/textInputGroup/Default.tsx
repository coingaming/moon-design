import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => {
  const inputProps1 = {
    inputSize: 'medium',
    placeholder: 'Country',
  };

  const inputProps2 = {
    inputSize: 'medium',
    placeholder: 'Phone',
  };

  return (
    <TextInputGroup
      inputProps={{
        input1: inputProps1,
        input2: inputProps2,
      }}
    />
  );
};

export default Example;
