import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Switch
        checked={state}
        onChange={setState}
        onBgColor="bg-chiChi"
        offBgColor="bg-krillin"
      />
      <Switch
        checked={state}
        onChange={setState}
        onBgColor="bg-roshi"
        offBgColor="bg-nappa"
      />
    </>
  );
};

export default Example;
