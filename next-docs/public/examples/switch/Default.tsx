import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <Switch
      checked={state}
      onChange={setState}
      data-tests="test-id"
      aria-label="Default Switch"
    />
  );
};

export default Example;
