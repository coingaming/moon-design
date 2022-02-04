import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-components';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <div className="flex gap-20 items-center">
      <Switch
        id="test-switch-1"
        size="xs"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
        id="test-switch-2"
        size="md"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
        id="test-switch-3"
        size="lg"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
    </div>
  );
};

export default Example;
