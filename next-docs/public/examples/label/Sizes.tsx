import React from 'react';
import { Label } from '@heathmont/moon-core';

const Example = () => (
  <>
    <Label size="twoxsmall">Twoxsmall</Label>
    <Label>Xsmall</Label>
    <Label size="twoxsmall" isUppercase={false}>
      Twoxsmall
    </Label>
    <Label isUppercase={false}>Xsmall</Label>
  </>
);

export default Example;
