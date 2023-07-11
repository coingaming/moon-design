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
        onIcon={<GenericCheckRounded />}
        offIcon={<GenericClose />}
        aria-label="Switch with icons"
      />
      <Switch
        checked={state}
        onChange={setState}
        size="xs"
        onIcon={<GenericCheckRounded />}
        offIcon={<GenericClose />}
        aria-label="Switch with icons"
      />
      <Switch
        checked={state}
        onChange={setState}
        onIcon={<GenericCheckRounded />}
        offIcon={<GenericClose />}
        aria-label="Switch with icons"
      />
    </>
  );
};

export default Example;
