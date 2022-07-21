import React from 'react';
import { ListItem } from '@heathmont/moon-core-tw';
import { GenericLike } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem
     className="bg-gohan"
      elementLeft={<GenericLike className='text-[1.5rem]' />}
    >
      Single line item
    </ListItem>
    <ListItem
      className="bg-gohan"
      elementRight={<GenericLike className='text-[1.5rem]' />}
    >
      Single line item
    </ListItem>
    <ListItem
      className="bg-gohan"
      elementLeft={<GenericLike className='text-[1.5rem]' />}
      elementRight={<GenericLike className='text-[1.5rem]' />}
    >
      Single line item
    </ListItem>
    <ListItem className="bg-gohan" isMeta elementRight={<>Meta</>}>
      Single line item
    </ListItem>
  </div>
);

export default Example;
