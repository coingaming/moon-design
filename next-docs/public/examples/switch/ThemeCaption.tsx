import React from 'react';
import { useState } from 'react';

import { Switch } from '@heathmont/moon-components';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <Switch
        id="test-switch-1"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
        colorScheme
        captionUnchecked="AM"
        captionChecked="PM"
      />
    </>
  );
};

export default Example;
