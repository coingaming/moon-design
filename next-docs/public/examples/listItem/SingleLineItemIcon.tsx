import React from 'react';
import { ListItem } from '@heathmont/moon-core';
import { GenericLike } from '@heathmont/moon-icons';
import { rem } from "@heathmont/moon-utils";

const Example = () => (
  <div className="flex justify-around items-center w-full flex-wrap">
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem backgroundColor="goku.100" elementLeft={<GenericLike fontSize={rem(23)}/>}>
        Single line item
      </ListItem>
    </div>
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem backgroundColor="goku.100" elementRight={<GenericLike fontSize={rem(23)}/>}>
        Single line item
      </ListItem>
    </div>
    <div className="m-0.5 min-w-full sm:min-w-min">
      <ListItem
        backgroundColor="goku.100"
        elementLeft={<GenericLike fontSize={rem(23)}/>}
        elementRight={<GenericLike fontSize={rem(23)}/>}
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
