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
    type: "select",
    options,
    label: 'select',
    placeholderSlot: 'Choose an option',
  };

  return (
    <div className="w-full flex-col items-center">
      <div className="flex items-end flex-wrap pb-8 w-full justify-center ps-40 pe-40">
        <TextInputGroup
          inputProps={{
            input1: inputProps,
            input2: selectProps
          }}
          size="medium"
        />
      </div>
      <div className="flex items-end flex-wrap pb-44 w-full justify-center ps-40 pe-40">
        <TextInputGroup
          inputProps={{
            input1: selectProps,
            input2: inputProps
          }}
          size="medium"
        />
      </div>
    </div>
  );
};

export default Example;
