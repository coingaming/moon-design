import React from 'react';
import { ListItem } from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex justify-around items-center w-full min-w-min flex-wrap">
    <div className="min-w-full sm:min-w-min mb-2">
      <ListItem subtext={<SubText />}>Two lines item</ListItem>
    </div>
    <div className="sm:w-96">
      <ListItem backgroundColor="goku.100" subtext={<SubText />}>
        Two lines item
      </ListItem>
    </div>
  </div>
);

export default Example;
