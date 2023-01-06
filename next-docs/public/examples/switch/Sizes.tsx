import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <Switch size="2xs" checked={state} onChange={setState} />
      <Switch size="xs" checked={state} onChange={setState} />
      <Switch checked={state} onChange={setState} />
    </>
  );
};

export default Example;
