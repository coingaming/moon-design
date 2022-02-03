import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-components';

type Props = {
  isRtl?: boolean;
};

const Example = ({ isRtl }: Props) => {
  const [state, setState] = useState(true);

  return (
    <>
      <Switch
        id="test-switch-1"
        checked={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.checked)
        }
        captionUnchecked="OFF"
        captionChecked="ON"
        isRtl={isRtl}
      />
    </>
  );
};

export default Example;
