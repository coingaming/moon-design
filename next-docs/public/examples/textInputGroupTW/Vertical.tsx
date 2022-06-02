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
    <div className="flex items-center gap-8 flex-wrap w-full justify-center ps-40 pe-40 flex-col">
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
    </div>
  );
};

export default Example;
