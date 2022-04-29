import React from 'react';
import { Label } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Label size="twoxsmall">Twoxsmall</Label>
    <Label>Xsmall</Label>
    <Label size="twoxsmall" isUppercase={false}>
      Twoxsmall
    </Label>
    <Label isUppercase={false}>Xsmall</Label>
  </div>
);

export default Example;
