import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core-tw';

const Example = () => {
  const inputProps1 = {
    inputSize: 'md',
    placeholder: 'Email',
    type: 'email',
  };

  const inputProps2 = {
    inputSize: 'md',
    placeholder: 'Password',
    type: 'password',
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
