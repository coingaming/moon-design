import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => {
  const inputProps1 = {
    inputSize: 'medium',
    placeholder: 'Country',
  };

  const inputProps2 = {
    inputSize: 'medium',
    placeholder: 'Phone',
  };

  const inputProps3 = {
    inputSize: 'large',
    placeholder: 'Country',
  };

  const inputProps4 = {
    inputSize: 'large',
    placeholder: 'Phone',
  };

  const inputProps5 = {
    inputSize: 'xlarge',
    placeholder: 'Country',
  };

  const inputProps6 = {
    inputSize: 'xlarge',
    placeholder: 'Phone',
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <TextInputGroup
          inputProps={{
            input1: inputProps1,
            input2: inputProps2,
          }}
        />
      </div>
      <div>
        <TextInputGroup
          inputProps={{
            input1: inputProps3,
            input2: inputProps4,
          }}
        />
      </div>
      <div>
        <TextInputGroup
          inputProps={{
            input1: inputProps5,
            input2: inputProps6,
          }}
        />
      </div>
    </div>
  );
};

export default Example;
