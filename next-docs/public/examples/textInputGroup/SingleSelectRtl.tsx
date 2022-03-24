import React from 'react';
import { TextInputGroup } from '@heathmont/moon-select';

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

  const selectProps1 = {
    options,
    label: 'xLarge',
    size: 'xLarge',
    placeholderSlot: 'Choose an option',
  };
  const selectProps2 = {
    options,
    label: 'xLarge',
    size: 'xLarge',
    placeholderSlot: 'Choose an option',
  };
  return (
    <div className="flex items-end flex-wrap pb-44 w-full justify-center ps-40 pe-40">
      <TextInputGroup
        selectProps={{
          input1: selectProps1,
          input2: selectProps2,
        }}
        isRtl
      />
    </div>
  );
};

export default Example;
