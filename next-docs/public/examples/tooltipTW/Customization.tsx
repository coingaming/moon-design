import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="bg-chiChi-10">
        Custom background colour
        <Tooltip.Arrow className="bg-chiChi-10" />
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="text-moon-18 text-krillin font-medium">
        Custom fonts
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content>Without arrow</Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="shadow-none drop-shadow-none">
        Without shadow
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  </>
);

export default Example;
