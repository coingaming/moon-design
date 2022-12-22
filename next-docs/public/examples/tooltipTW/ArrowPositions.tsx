import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="top-start">
          Top-start position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Top-center is default position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="top-end">
          Top-end position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="right">
          Right side position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-start">
          Bottom-start position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-center">
          Bottom-center position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-end">
          Bottom-end position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="left">
          Left side position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  </>
);

export default Example;
