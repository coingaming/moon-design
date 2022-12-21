import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content bgColor="bg-chiChi-10">
        Custom background colour
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="text-moon-18 text-krillin font-medium">
        Custom fonts
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip>Trigger</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content bgColor="bg-roshi-10" className="text-piccolo">
        All custom colours
      </Tooltip.Content>
    </Tooltip>
  </>
);

export default Example;
