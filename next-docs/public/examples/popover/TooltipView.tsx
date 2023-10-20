import React from 'react';
import { Popover, Chip } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <Popover position="top">
      <Popover.Trigger>
        <Chip>Trigger</Chip>
      </Popover.Trigger>
      <Popover.Panel className="w-auto min-w-[12rem] overflow-y-visible p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-goku">
        This is the popover with arrow (tooltip)
        <Popover.Arrow />
      </Popover.Panel>
    </Popover>
  );
};

export default Example;
