import React from 'react';
import { useState } from 'react';

import { Switch } from '@heathmont/moon-components';

const Example = () => {
  const [state, setState] = useState(true);

  return (
    <div className="flex gap-20 items-center">
      <Switch
        size="xs"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
        size="md"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
      />
      <Switch
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
