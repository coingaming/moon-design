import { useState } from 'react';
import { Switch, Tooltip } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Switch checked={state} onChange={setState} data-tests="test-id" />
      </Tooltip.Trigger>
      <Tooltip.Content>
        This is the tooltip for Switch
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
};

export default Example;
