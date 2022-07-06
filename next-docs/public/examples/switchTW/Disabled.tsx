import { Switch } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  return (
    <>
      <Switch onChange={() => {}} checked={true} disabled size="md" />
      <Switch onChange={() => {}} checked={false} disabled size="md"  />
    </>
  );
};

export default Example;
