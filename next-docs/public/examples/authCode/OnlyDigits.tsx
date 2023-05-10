import React from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => (
  <AuthCode
    length={4}
    allowedCharacters={'numeric'}
    onChange={(value: string) => {}}
  />
);

export default Example;
