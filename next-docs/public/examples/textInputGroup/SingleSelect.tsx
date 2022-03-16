import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => (
  <TextInputGroup
    inputSize="medium"
    placeholder={{
      input1: 'Country',
      input2: 'Phone',
    }}
    types={{ input1: 'single-select', input2: 'single-select' }}
  />
);

export default Example;
