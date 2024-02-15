import { useState, useEffect } from 'react';
import { Tooltip, Chip } from '@heathmont/moon-core-tw';

const Example = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const box =
      (typeof document === 'object' && document?.getElementById('box')) || null;
    setContainer(box);
  }, []);
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
