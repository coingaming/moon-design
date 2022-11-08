import React, { useState } from 'react';
import { Popover, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <div className="">
      <Popover>
        <Popover.Trigger>
          <Button>Toggle Popover</Button>
        </Popover.Trigger>

        <Popover.Panel>Panel</Popover.Panel>
      </Popover>
    </div>
  );
};

export default Example;
