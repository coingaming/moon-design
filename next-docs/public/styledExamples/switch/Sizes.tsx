import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-core';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <Switch
        id="test-switch-1"
        size="twoxsmall"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
        id="test-switch-2"
        size="xsmall"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
        id="test-switch-3"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
    </>
  );
};

export default Example;
