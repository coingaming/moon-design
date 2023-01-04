import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-core';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <Switch
      id="test-switch-rtl"
      checked={state}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setState(e.target.checked)
      }
      isRtl={true}
    />
  );
};

export default Example;
