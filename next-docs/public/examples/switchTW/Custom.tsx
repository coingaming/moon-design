import React from 'react';
import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Switch checked={state} onChange={setState} size="2xs" twWidth="!w-7" />

      <Switch checked={state} onChange={setState} bgColor="bg-roshi" />
    </>
  );
};

export default Example;
