import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <Tooltip>
    <Tooltip.Trigger>
      <Chip>Trigger</Chip>
    </Tooltip.Trigger>
    <Tooltip.Content>This is the default tooltip</Tooltip.Content>
  </Tooltip>
);

export default Example;
