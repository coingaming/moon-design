import React from 'react';
import { Label } from '@heathmont/moon-core';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full mb-4">
      <Label size="twoxsmall">Twoxsmall</Label>
      <Label size="twoxsmall" iconLeft={<GenericInfo color='hit.100' />}>
        Twoxsmall
      </Label>
      <Label size="twoxsmall" iconRight={<ControlsClose color='hit.100' />}>
        Twoxsmall
      </Label>
      <Label
        size="twoxsmall"
        iconLeft={<GenericInfo color='hit.100' />}
        iconRight={<ControlsClose color='hit.100' />}
      >
        Twoxsmall
      </Label>
    </div>
    <div className="flex justify-around items-center w-full">
      <Label>Xsmall</Label>
      <Label iconLeft={<GenericInfo color='hit.100' />}>Xsmall</Label>
      <Label iconRight={<ControlsClose color='hit.100' />}>Xsmall</Label>
      <Label
        iconLeft={<GenericInfo color='hit.100' />}
        iconRight={<ControlsClose color='hit.100'/>}
      >
        Xsmall
      </Label>
    </div>
  </div>
);

export default Example;
