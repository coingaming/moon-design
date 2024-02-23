import { useEffect } from 'react';
import { Popover, Button, MenuItem } from '@heathmont/moon-core-tw';

type RenderProps = {
  open?: boolean;
  close?: () => void;
};

const Example = () => (
  <Popover>
    <Popover.Trigger>
      <Button>Toggle Popover</Button>
    </Popover.Trigger>
    <Popover.Panel>
      {({ open, close }) => <Content close={close} open={open} />}
    </Popover.Panel>
  </Popover>
);

const Content = ({ open, close }: RenderProps) => {
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
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item</MenuItem>
      <Button onClick={close}>Close</Button>
    </>
  );
};

export default Example;
