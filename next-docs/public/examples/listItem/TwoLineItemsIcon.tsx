import React from 'react';
import { GenericLike } from '@heathmont/moon-icons';
import { ListItem } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        elementLeft={<GenericLike fontSize={rem(24)} />}
        subtext={<SubText />}
      >
        Two lines item
      </ListItem>
    </div>
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        elementRight={<GenericLike fontSize={rem(24)} />}
        subtext={<SubText />}
      >
        Two lines item
      </ListItem>
    </div>
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        elementLeft={<GenericLike fontSize={rem(24)} />}
        elementRight={<GenericLike fontSize={rem(24)} />}
        subtext={<SubText />}
      >
        Two lines item
      </ListItem>
    </div>
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        isMeta
        elementRight={<>Meta</>}
        subtext={<SubText />}
      >
        Two lines item
      </ListItem>
    </div>
  </div>
);

export default Example;
