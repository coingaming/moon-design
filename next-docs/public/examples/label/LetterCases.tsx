import React from 'react';
import { Label } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Label>Uppercase</Label>
    <Label textTransform={"lowercase"}>Lowercase</Label>
    <Label textTransform={"capitalize"}>Capitalize</Label>
  </div>
);

export default Example;
