import React from 'react';

import { ListItem, SingleSelect } from '@heathmont/moon-core';

const options2 = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <ListItem
        isMeta
        elementRight={<>Meta</>}
        subtext={
          <>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </>
        }
      >
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <ListItem
        isMeta
        elementRight={<>Meta</>}
        subtext={
          <>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </>
        }
      >
        Option 2
      </ListItem>
    ),
  },
];

const Example = () => (
  <div className="flex flex-col">
    <div className="flex justify-around items-center w-96 ">
      <SingleSelect options={options2} variant="primary" />
    </div>
  </div>
);

export default Example;
