import React, { useEffect } from 'react';
import { Popover, Button, MenuItem } from '@heathmont/moon-core-tw';
import {
  GenericTrophy,
  MediaTuner,
  MediaMegaphone,
} from '@heathmont/moon-icons-tw';

type RenderProps = {
  open: boolean;
  close: () => void;
};
const Example = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Toggle Popover</Button>
      </Popover.Trigger>
      <Popover.Panel className="!w-96">
        {({ open, close }: RenderProps) => (
          <Content close={close} open={open} />
        )}
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
    <div className="p-6 flex flex-col gap-6">
      <MenuItem>
        <span className="flex w-11 h-11 bg-goku items-center justify-center rounded-lg">
          <GenericTrophy className="text-bulma text-moon-24" />
        </span>
        <MenuItem.MultiTitle
          title="Tournaments"
          text={<span>Best tournaments with streamers</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="flex w-11 h-11 bg-goku items-center justify-center">
          <MediaMegaphone className="text-bulma text-moon-24" />
        </span>
        <MenuItem.MultiTitle
          title="Promotions"
          text={<span> Your favourite games</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="flex w-11 h-11 bg-goku items-center justify-center">
          <MediaTuner className="text-bulma text-moon-24" />
        </span>
        <MenuItem.MultiTitle
          title="Providers"
          text={<span> Your favourite games</span>}
        />
      </MenuItem>
      <Button onClick={close}>Close</Button>
    </div>
  );
};

export default Example;
