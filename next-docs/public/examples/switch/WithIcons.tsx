import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';
import { GenericCheckRounded, GenericClose } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Switch
        checked={state}
        onChange={setState}
        size="2xs"
        onIcon={<GenericCheckRounded className="text-goten text-moon-12" />}
        offIcon={<GenericClose className="text-bulma text-moon-12" />}
      />
      <Switch
        checked={state}
        onChange={setState}
        size="xs"
        onIcon={<GenericCheckRounded className="text-goten text-moon-16" />}
        offIcon={<GenericClose className="text-bulma text-moon-16" />}
      />
      <Switch
        checked={state}
        onChange={setState}
        onIcon={<GenericCheckRounded className="text-goten text-moon-24" />}
        offIcon={<GenericClose className="text-bulma text-moon-24" />}
      />
    </>
  );
};

export default Example;
