import React from 'react';
import { Checkbox, ListItem } from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="w-72 m-0.5">
      <ListItem elementRight={<Checkbox />} subtext={<SubText />}>
        Two lines item
      </ListItem>
    </div>
  </div>
);

export default Example;
