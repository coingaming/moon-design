import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-core';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <Switch
        id="button-switch-1"
        buttons={{
          onLabel: 'On',
          offLabel: 'Off',
        }}
        size="medium"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
        id="button-switch-2"
        buttons={{
          onLabel: 'On',
          offLabel: 'Off',
        }}
        size="large"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
    </>
  );
};

export default Example;
