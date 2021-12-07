import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput type="email" inputSize="xsmall" placeholder="xsmall" />
    </div>
    <div className="m-4">
      <TextInput type="email" inputSize="small" placeholder="small" />
    </div>
    <div className="m-4">
      <TextInput type="email" inputSize="medium" placeholder="medium" />
    </div>
  </div>
);

export default Example;
