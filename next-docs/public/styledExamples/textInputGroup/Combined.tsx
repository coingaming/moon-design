import { TextInputGroup } from '@heathmont/moon-select';
import React from 'react';

const Example = () => {
  const options = [
    {
      value: 'Option 1',
      label: 'Option 1',
    },
    {
      value: 'Option 2',
      label: 'Option 2',
    },
    {
      value: 'Option 3',
      label: 'Option 3',
    },
  ];

  const inputProps = {
    type: 'text',
    placeholder: 'Set country',
    label: 'Country',
  };

  const selectProps = {
    type: 'select',
    options,
    placeholderSlot: 'City',
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <TextInputGroup
        inputProps={{
          input1: inputProps,
          input2: selectProps,
        }}
      />
      <TextInputGroup
        inputProps={{
          input1: selectProps,
          input2: inputProps,
        }}
      />
    </div>
  );
};

export default Example;
