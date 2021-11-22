import React from 'react';

import { ListItem } from '@heathmont/moon-core';
import { IconClaps } from '@heathmont/moon-assets';

const Example = () => (
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem backgroundColor="goku.100" elementLeft={<IconClaps />}>
        Single line item
      </ListItem>
    </div>
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem backgroundColor="goku.100" elementRight={<IconClaps />}>
        Single line item
      </ListItem>
    </div>
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem
        backgroundColor="goku.100"
        elementLeft={<IconClaps />}
        elementRight={<IconClaps />}
      >
        Single line item
      </ListItem>
    </div>
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem backgroundColor="goku.100" isMeta elementRight={<>Meta</>}>
        Single line item
      </ListItem>
    </div>
  </div>
);

export default Example;
