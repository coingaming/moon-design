import React from 'react';

import { ListItem, SingleSelect, TextInput } from '@heathmont/moon-core';
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

const Example = () => (
  <div className="flex flex-col">
    <div className="flex justify-around items-center w-96 mb-4">
      <SingleSelect options={options} variant="primary" zIndexOptions={100} />
    </div>
    <TextInput type="text" inputSize="medium" />
  </div>
);

export default Example;
