import React from 'react';
import { Popover, Button, MenuItem } from '@heathmont/moon-core-tw';
import {
  GenericTrophy,
  MediaMegaphone,
  MediaTuner,
} from '@heathmont/moon-icons-tw';

const Example = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Toggle Popover</Button>
      </Popover.Trigger>
      <Popover.Panel menuWidth="w-96">
        <Content />
      </Popover.Panel>
    </Popover>
  );
};

const Content: React.FC = () => (
  <div className="p-8 flex flex-col gap-6">
    <MenuItem>
      <span className="flex w-11 h-11 bg-goku items-center justify-center rounded-lg">
        <GenericTrophy className="text-bulma text-[1.5rem]" />
      </span>
      <MenuItem.MultiTitle
        title="Tournaments"
        text={<span>Best tournaments with streamers</span>}
      />
    </MenuItem>
    <MenuItem>
      <span className="flex w-11 h-11 bg-goku items-center justify-center">
        <MediaMegaphone className="text-bulma text-[1.5rem]" />
      </span>
      <MenuItem.MultiTitle
        title="Promotions"
        text={<span> Your favourite games</span>}
      />
    </MenuItem>
    <MenuItem>
      <span className="flex w-11 h-11 bg-goku items-center justify-center">
        <MediaTuner className="text-bulma text-[1.5rem]" />
      </span>
      <MenuItem.MultiTitle
        title="Providers"
        text={<span> Your favourite games</span>}
      />
    </MenuItem>
  </div>
);

export default Example;
