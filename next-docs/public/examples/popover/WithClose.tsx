import React, { useEffect } from 'react';
import { Popover, Button, MenuItem } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

type RenderProps = {
  open?: boolean;
  close?: () => void;
};
const Example = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Toggle Popover</Button>
      </Popover.Trigger>
      <Popover.Panel className="p-2 flex flex-col gap-1">
        {({ open, close }) => <Content close={close} open={open} />}
      </Popover.Panel>
    </Popover>
  );
};

const Content: React.FC<RenderProps> = ({ open, close }) => {
  useEffect(() => {
    if (open) {
      console.log('Open Popover');
    }
    return () => {
      console.log('Close Popover');
    };
  }, [open]);

  return (
    <>
      <MenuItem>
        <span className="flex w-11 h-11 bg-gohan items-center justify-center rounded-lg">
          <OtherFrame className="text-bulma text-moon-24" />
        </span>
        <MenuItem.MultiTitle
          title="Tournaments"
          text={<span>Best tournaments with streamers</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="flex w-11 h-11 bg-gohan items-center justify-center">
          <OtherFrame className="text-bulma text-moon-24" />
        </span>
        <MenuItem.MultiTitle
          title="Promotions"
          text={<span> Your favourite games</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="flex w-11 h-11 bg-gohan items-center justify-center">
          <OtherFrame className="text-bulma text-moon-24" />
        </span>
        <MenuItem.MultiTitle
          title="Providers"
          text={<span> Your favourite games</span>}
        />
      </MenuItem>
      <Button onClick={close}>Close</Button>
    </>
  );
};

export default Example;
