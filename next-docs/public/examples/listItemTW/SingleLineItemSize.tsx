import React from 'react';
import { ListItem } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem size="large" className="bg-gohan">
      Large
    </ListItem>
    <ListItem className="bg-gohan">Medium</ListItem>
  </div>
);

export default Example;
