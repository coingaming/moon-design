import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content align="start">Top-start position</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content>Top-center is default position</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content align="end">Top-end position</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Right side position</Tooltip.Content>
      </Tooltip>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content align="start" side="bottom">
          Bottom-start position
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content side="bottom">Bottom-center position</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content align="end" side="bottom">
          Bottom-end position
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content side="left">Left side position</Tooltip.Content>
      </Tooltip>
    </div>
  </>
);

export default Example;
