import React from 'react';

import { ListItem, SingleSelect } from '@heathmont/moon-core';
import { MediaHeadphones } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

interface Option {
  value: string;
  label: string;
  element:
    | (({ isSelected }: { isSelected: boolean }) => JSX.Element | string)
    | JSX.Element;
}

const options: Option[] = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 2
      </ListItem>
    ),
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 3
      </ListItem>
    ),
  },
  {
    value: 'Option 4',
    label: 'Option 4',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 4
      </ListItem>
    ),
  },
  {
    value: 'Option 5',
    label: 'Option 5',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 5
      </ListItem>
    ),
  },
];

const Component = () => {
  const [value, setValue] = React.useState(options[1]);

  const findElement = (element: Option, value: Option) => {
    const isFound = element.value === value.value;
    if (isFound) {
      return value;
    }
    return '';
  };

  const getOptionValue = (option: Option | undefined) => {
    return option ? option.value : '';
  };

  return (
    <SingleSelect
      options={options}
      variant="primary"
      onChange={setValue}
      controlledValue={getOptionValue(
        options.find((element) => findElement(element, value))
      )}
    />
  );
};

const Example = () => (
  <div className="flex flex-col justify-around items-center">
    <p className="mb-4 sm:w-3/5 lg:w-3/4 text-center">
      If you need the inner content of the button on the first render you must
      control the listbox's state and keep its options' values and labels in
      data at the top of the tree, and render the button directly via children.
    </p>
    <div>
      <div className="flex w-96">
        <Component />
      </div>
    </div>
  </div>
);

export default Example;
