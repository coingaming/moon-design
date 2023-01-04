import React from 'react';
import { ListItem } from '@heathmont/moon-core';
import { GenericLike } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem
      backgroundColor="gohan.100"
      elementLeft={<GenericLike fontSize={rem(24)} />}
    >
      Single line item
    </ListItem>
    <ListItem
      backgroundColor="gohan.100"
      elementRight={<GenericLike fontSize={rem(24)} />}
    >
      Single line item
    </ListItem>
    <ListItem
      backgroundColor="gohan.100"
      elementLeft={<GenericLike fontSize={rem(24)} />}
      elementRight={<GenericLike fontSize={rem(24)} />}
    >
      Single line item
    </ListItem>
    <ListItem backgroundColor="gohan.100" isMeta elementRight={<>Meta</>}>
      Single line item
    </ListItem>
  </div>
);

export default Example;
