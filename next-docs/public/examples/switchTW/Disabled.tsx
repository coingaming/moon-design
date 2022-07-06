import { Switch } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  return (
    <>
      <Switch onChange={() => {}} checked={true} disabled />
      <Switch onChange={() => {}} checked={false} disabled />
    </>
  );
};

export default Example;
