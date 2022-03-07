import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <div>
      <TextInputGroup
        inputSize="medium"
        placeholder={{
          input1: 'medium',
          input2: 'medium',
        }}
      />
    </div>
    <div>
      <TextInputGroup
        inputSize="large"
        placeholder={{
          input1: 'large',
          input2: 'large',
        }}
      />
    </div>
    <div>
      <TextInputGroup
        inputSize="xlarge"
        placeholder={{
          input1: 'xlarge',
          input2: 'xlarge',
        }}
      />
    </div>
  </div>
);

export default Example;
