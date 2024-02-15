import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Switch
        checked={state}
        onChange={setState}
        className="bg-nappa moon-checked:bg-roshi"
        aria-label="Switch with custom styles"
      />
      <Switch
        checked={state}
        onChange={setState}
        className="bg-krillin moon-checked:bg-chichi"
        aria-label="Switch with custom styles"
      />
    </>
  );
};

export default Example;
