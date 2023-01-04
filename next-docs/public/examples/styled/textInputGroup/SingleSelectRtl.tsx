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
    type: 'select',
    placeholderSlot: 'Choose an option',
  };
  const selectProps2 = {
    options,
    type: 'select',
    label: 'xLarge',
    placeholderSlot: 'Choose an option',
  };
  return (
    <TextInputGroup
      inputProps={{
        input1: selectProps1,
        input2: selectProps2,
      }}
      isRtl={true}
    />
  );
};

export default Example;
