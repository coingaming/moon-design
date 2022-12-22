import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <Tooltip>
    <Tooltip.Trigger>
      <Chip>Trigger</Chip>
    </Tooltip.Trigger>
    <Tooltip.Content withShadow={false}>
      Without shadow
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip>
);

export default Example;
