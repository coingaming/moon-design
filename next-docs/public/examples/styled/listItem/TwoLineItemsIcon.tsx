import React from 'react';
import { GenericLike } from '@heathmont/moon-icons';
import { ListItem } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem
      backgroundColor="gohan.100"
      elementLeft={<GenericLike fontSize={rem(24)} />}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
    <ListItem
      backgroundColor="gohan.100"
      elementRight={<GenericLike fontSize={rem(24)} />}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
    <ListItem
      backgroundColor="gohan.100"
      elementLeft={<GenericLike fontSize={rem(24)} />}
      elementRight={<GenericLike fontSize={rem(24)} />}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
    <ListItem
      backgroundColor="gohan.100"
      isMeta
      elementRight={<>Meta</>}
      subtext={<SubText />}
    >
      Two lines item
    </ListItem>
  </div>
);

export default Example;
