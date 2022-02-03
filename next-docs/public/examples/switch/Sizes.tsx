import React from 'react';
import { useState } from 'react';

import { Switch } from '@heathmont/moon-components';

type Props = {
  isRtl?: boolean;
};

const Example = ({ isRtl }: Props) => {
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
        isRtl={isRtl}
      />
      <Switch
        id="test-switch-2"
        size="md"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
        isRtl={isRtl}
      />
      <Switch
        id="test-switch-3"
        size="lg"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
        isRtl={isRtl}
      />
    </div>
  );
};

export default Example;
