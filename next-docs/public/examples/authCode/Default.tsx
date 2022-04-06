import React from 'react';
import { AuthCode } from '@heathmont/moon-core';

const Example = () => {
  return (
    <AuthCode
      onChange={(value: string) => {
        console.log('New value - ', value);
      }}
      onSubmit={(value: string) => {
        console.log('Submit value - ', value);
      }}
    />
  );
};

export default Example;
