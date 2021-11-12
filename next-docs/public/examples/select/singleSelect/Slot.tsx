import React from 'react';

import { ListItem, SingleSelect } from '@heathmont/moon-core';
import { Chip } from '@heathmont/moon-components';

const optionsAsString = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: <ListItem>Option 1</ListItem>,
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: <ListItem>Option 2</ListItem>,
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: <ListItem>Option 3</ListItem>,
  },
];

const TopContent = () => {
  return (
    <>
      <ListItem color="trunks.100">List item (Categories)</ListItem>
      <div className="flex flex-around px-4 gap-x-1.5">
        <Chip isActive={true}>$link</Chip>
        <Chip>$link</Chip>
        <Chip>$link</Chip>
      </div>
    </>
  );
};

const Example = () => (
  <div className="flex flex-col justify-around items-center">
    <p className="mb-4 sm:w-3/5 lg:w-3/4 text-center">
      SingleSelect component provide slot prop `search` to place search
      component (or any other component) on the top of dropdown layout.
    </p>
    <div className="flex justify-around items-center w-96">
      <SingleSelect
        options={optionsAsString}
        variant="primary"
        search={<div className="p-4">Search component</div>}
        titleOptions={<ListItem color="trunks.100">List item (title)</ListItem>}
        topContent={<TopContent />}
      />
    </div>
  </div>
);

export default Example;
