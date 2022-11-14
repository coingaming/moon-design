import React from 'react';
import { Popover, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <div className="flex align-middle justify-around items-center w-full gap-2">
      <Popover position="top">
        <Popover.Trigger>
          <Button>Top</Button>
        </Popover.Trigger>
        <Popover.Panel menuWidth="w-96">
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="right">
        <Popover.Trigger>
          <Button>Right</Button>
        </Popover.Trigger>
        <Popover.Panel menuWidth="w-96">
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="left">
        <Popover.Trigger>
          <Button>Left</Button>
        </Popover.Trigger>
        <Popover.Panel menuWidth="w-96">
          <Content />
        </Popover.Panel>
      </Popover>
    </div>
  );
};

const Content: React.FC = () => (
  <p className="p-4 text-moon-14">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet.
  </p>
);
export default Example;
