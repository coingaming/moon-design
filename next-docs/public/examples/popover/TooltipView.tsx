import React from 'react';
import { Popover, Chip } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <Popover position="top">
      <Popover.Trigger>
        <Chip>Trigger</Chip>
      </Popover.Trigger>
      <Popover.Panel className="w-auto p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-goku shadow-[0_6px_6px_-6px_rgba(0,0,0,0.16)] drop-shadow-[0_0_1px_rgba(0,0,0,0.4)]">
        Tooltip View
      </Popover.Panel>
    </Popover>
  );
};

export default Example;
