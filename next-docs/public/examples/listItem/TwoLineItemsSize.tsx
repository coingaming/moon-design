import React from 'react';
import { ListItem } from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="m-0.5">
      <ListItem size="large" backgroundColor="goku.100" subtext={<SubText />}>
        Large
      </ListItem>
    </div>
    <div className="m-0.5">
      <ListItem backgroundColor="goku.100" subtext={<SubText />}>
        Medium
      </ListItem>
    </div>
  </div>
);

export default Example;
