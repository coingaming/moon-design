import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => {
  const container =
    (typeof document === 'object' && document?.getElementById('box')) || null;
  return (
    <div id="box">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip>Trigger</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content container={container}>
          This is the default tooltip
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
};

export default Example;
