import React from 'react';
import { ListItem } from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem backgroundColor="gohan.100" subtext={<SubText />}>
      Two lines item
    </ListItem>
    <ListItem backgroundColor="gohan.100" subtext={<SubText />}>
      Two lines item
    </ListItem>
  </div>
);

export default Example;
