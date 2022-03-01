import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => (
  <TextInputGroup
    inputSize="medium"
    orientation="vertical"
    placeholder={{
      input1: 'Country',
      input2: 'Phone',
    }}
  />
);

export default Example;
