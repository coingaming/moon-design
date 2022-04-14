import React from 'react';
import { Label } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Label>Default</Label>
    <Label isUppercase={false}>Lowercase</Label>
  </div>
);

export default Example;
