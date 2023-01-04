import React from 'react';
import { Switch } from '@heathmont/moon-core';

const Example = () => {
  return (
    <>
      <Switch
        id="test-switch-disabled-checked"
        checked={true}
        disabled={true}
        onChange={() => {
          console.log('da li radi disabled!');
        }}
      />

      <Switch
        id="test-switch-disabled"
        checked={false}
        disabled={true}
        onChange={() => {}}
      />
    </>
  );
};

export default Example;
