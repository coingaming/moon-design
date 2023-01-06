import React from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => (
  <AuthCode
    onChange={(value: string) => {
      console.log('New value - ', value);
    }}
    onSubmit={(value: string) => {
      console.log('Submit value - ', value);
    }}
    errorMessage="Provided value is not valid!"
  />
);

export default Example;
