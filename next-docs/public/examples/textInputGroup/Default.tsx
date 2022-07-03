import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'xlarge',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'xlarge',
    placeholder: 'Phone',
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-2">
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
        orientation="vertical"
      />
    </div>
  );
};

export default Example;
