import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => (
  <TextInputGroup
    inputSize="medium"
    placeholder={{
      input1: 'Email',
      input2: 'Password',
    }}
    types={{
      input1: 'email',
      input2: 'password',
    }}
  />
);

export default Example;
