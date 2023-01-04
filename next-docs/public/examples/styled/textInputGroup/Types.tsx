import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => {
  const inputProps1 = {
    placeholder: 'Email',
    type: 'email',
  };

  const inputProps2 = {
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
