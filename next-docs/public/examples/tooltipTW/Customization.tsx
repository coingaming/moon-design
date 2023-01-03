import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="bg-chichi-10">
        Custom background colour
        <Tooltip.Arrow className="bg-chichi-10" />
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
      <Tooltip.Content className="bg-roshi-10 text-piccolo">
        All custom colours
        <Tooltip.Arrow className="bg-roshi-10" />
      </Tooltip.Content>
    </Tooltip>
  </>
);

export default Example;
