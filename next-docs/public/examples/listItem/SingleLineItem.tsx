import React from 'react';
import { ListItem } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem backgroundColor="gohan.100">Single line item</ListItem>
    <ListItem backgroundColor="gohan.100">Single line item</ListItem>
  </div>
);

export default Example;
