import React from 'react';
import { Popover, Button, Chip, MenuItem } from '@heathmont/moon-core-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

const Example = () => {
  return (
    <div className="flex align-middle justify-around items-center w-full gap-2">
      <Popover>
        <Popover.Trigger>
          <Button>Button</Button>
        </Popover.Trigger>
        <Popover.Panel>
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="bottom-end">
        <Popover.Trigger>
          <Chip iconOnly={<ControlsChevronDown className="text-moon-24" />} />
        </Popover.Trigger>
        <Popover.Panel>
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="bottom-start">
        <Popover.Trigger>
          <span className="text-moon-14 text-trunks cursor-pointer hover:text-piccolo">
            Open popover
          </span>
        </Popover.Trigger>
        <Popover.Panel>
          <Content />
        </Popover.Panel>
      </Popover>
    </div>
  );
};

const Content: React.FC = () => (
  <div>
    <MenuItem>Tournaments</MenuItem>
    <MenuItem>Promotions</MenuItem>
    <MenuItem>Providers</MenuItem>
  </div>
);
export default Example;
