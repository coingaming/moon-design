import { Popover, Button, MenuItem } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex align-middle justify-around items-center w-full gap-2">
    <Popover position="top">
      <Popover.Trigger>
        <Button>Top</Button>
      </Popover.Trigger>
      <Popover.Panel>
        <Content />
      </Popover.Panel>
    </Popover>

    <Popover position="right">
      <Popover.Trigger>
        <Button>Right</Button>
      </Popover.Trigger>
      <Popover.Panel>
        <Content />
      </Popover.Panel>
    </Popover>

    <Popover position="left">
      <Popover.Trigger>
        <Button>Left</Button>
      </Popover.Trigger>
      <Popover.Panel>
        <Content />
      </Popover.Panel>
    </Popover>
  </div>
);

const Content = () => (
  <>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item</MenuItem>
  </>
);
export default Example;
