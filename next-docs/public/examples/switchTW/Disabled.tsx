import React from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <>
      <Switch checked disabled />
      <Switch checked={false} disabled />
    </>
  );
};

export default Example;
