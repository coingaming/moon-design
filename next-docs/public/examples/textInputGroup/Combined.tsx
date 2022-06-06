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
    placeholder: 'Country',
  };

  const selectProps = {
    type: 'select',
    options,
    label: 'select',
    placeholderSlot: 'Choose an option',
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <TextInputGroup
        inputProps={{
          input1: inputProps,
          input2: selectProps,
        }}
        size="medium"
      />
      <TextInputGroup
        inputProps={{
          input1: selectProps,
          input2: inputProps,
        }}
        size="medium"
      />
    </div>
  );
};

export default Example;
