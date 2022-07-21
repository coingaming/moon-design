import React from 'react';
import { GenericLike } from '@heathmont/moon-icons-tw';
import { ListItem } from '@heathmont/moon-core-tw';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem
      className="bg-gohan"
      elementLeft={<GenericLike className='text-[1.5rem]' />}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
    <ListItem
      className="bg-gohan"
      elementRight={<GenericLike className='text-[1.5rem]' />}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
    <ListItem
      className="bg-gohan"
      elementLeft={<GenericLike className='text-[1.5rem]' />}
      elementRight={<GenericLike className='text-[1.5rem]' />}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
    <ListItem
      className="bg-gohan"
      isMeta
      elementRight={<>Meta</>}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
  </div>
);

export default Example;
