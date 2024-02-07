import { Popover, Button, MenuItem } from '@heathmont/moon-core-tw';

const Example = () => (
  <Popover>
    <Popover.Trigger>
      <Button>Toggle Popover</Button>
    </Popover.Trigger>
    <Popover.Panel>
      <Content />
    </Popover.Panel>
  </Popover>
);

const Content = () => (
  <>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item</MenuItem>
  </>
);

export default Example;
