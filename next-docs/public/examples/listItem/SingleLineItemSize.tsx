import React from 'react';
import { ListItem } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full min-w-min flex-wrap">
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem backgroundColor="goku.100">Large</ListItem>
    </div>
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem size="medium" backgroundColor="goku.100">
        Medium
      </ListItem>
    </div>
  </div>
);

export default Example;
