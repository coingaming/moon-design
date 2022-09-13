import React from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <>
      <Switch
        checked={true}
        disabled={true}
        onChange={() => {
          console.log('da li radi disabled!');
        }}
      />

      <Switch checked={false} disabled={true} onChange={() => {}} />
    </>
  );
};

export default Example;
