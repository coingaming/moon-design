import React from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => (
  <AuthCode
    onChange={(value: string) => {}}
    errorMessage="Provided value is not valid!"
  />
);

export default Example;
