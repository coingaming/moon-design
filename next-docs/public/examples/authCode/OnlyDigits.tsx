import React from 'react';
import { AuthCode } from '@heathmont/moon-core';

const Example = () => {
  return (
    <AuthCode
      length={4}
      onlyDigits={true}
      onChange={(value: string) => {
        console.log('** EXAMPLE - New value - ', value);
      }}
      onSubmit={(value: string) => {
        console.log('** EXAMPLE - Submit value - ', value);
      }}
    />
  );
};

export default Example;
