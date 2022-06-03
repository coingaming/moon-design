import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core-tw';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Phone',
  };

  const inputProps3 = {
    type: 'text',
    inputSize: 'xl',
    placeholder: 'Country',
  };

  const inputProps4 = {
    type: 'text',
    inputSize: 'xl',
    placeholder: 'Phone',
  };

  return (
    <>
      <TextInputGroup
        orientation="vertical"
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <TextInputGroup
        orientation="vertical"
        inputProps={{
          input1: inputProps3,
          input2: inputProps4,
        }}
      />
    </>
  );
};

export default Example;
