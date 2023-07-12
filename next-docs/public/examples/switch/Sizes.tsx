import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <Switch
        size="2xs"
        checked={state}
        onChange={setState}
        aria-label="Switch with 2xs size"
      />
      <Switch
        size="xs"
        checked={state}
        onChange={setState}
        aria-label="Switch with xs size"
      />
      <Switch
        checked={state}
        onChange={setState}
        aria-label="Switch with sm size"
      />
    </>
  );
};

export default Example;
