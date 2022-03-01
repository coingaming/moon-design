import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => (
  <TextInputGroup
    inputSize="medium"
    placeholder={{
      input1: 'Country',
      input2: 'Phone',
    }}
    isRtl
  />
);

export default Example;
