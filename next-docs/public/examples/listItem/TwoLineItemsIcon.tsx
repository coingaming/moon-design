import React from 'react';
import { IconClaps } from '@heathmont/moon-assets';
import { ListItem } from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        elementLeft={<IconClaps />}
        subtext={<SubText />}
      >
        Two lines item
      </ListItem>
    </div>
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        elementRight={<IconClaps />}
        subtext={<SubText />}
      >
        Two lines item
      </ListItem>
    </div>
    <div className="w-72 m-0.5">
      <ListItem
        backgroundColor="goku.100"
        elementLeft={<IconClaps />}
        elementRight={<IconClaps />}
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
