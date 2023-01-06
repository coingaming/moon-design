import React from 'react';
import { ListItem, SingleSelect } from '@heathmont/moon-core';
import { MediaHeadphones } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const optionsWithoutLabel = [
  {
    value: 'Option 1',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 2
      </ListItem>
    ),
  },
  {
    value: 'Option 3',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 3
      </ListItem>
    ),
  },
  {
    value: 'Option 4',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 4
      </ListItem>
    ),
  },
];

const Example = () => (
  <div className="flex flex-col">
    <div className="flex justify-around items-center w-96">
      <SingleSelect
        options={optionsWithoutLabel}
        variant="primary"
        defaultValue={'Option 3'}
      />
    </div>
  </div>
);

export default Example;
