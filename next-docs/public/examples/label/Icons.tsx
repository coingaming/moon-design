import React from 'react';
import { Label } from '@heathmont/moon-core';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Label size="twoxsmall" iconLeft={<GenericInfo />}>
        Twoxsmall
      </Label>
      <Label size="twoxsmall" iconRight={<ControlsClose />}>
        Twoxsmall
      </Label>
      <Label
        size="twoxsmall"
        iconLeft={<GenericInfo />}
        iconRight={<ControlsClose />}
      >
        Twoxsmall
      </Label>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Label iconLeft={<GenericInfo />}>Xsmall</Label>
      <Label iconRight={<ControlsClose />}>Xsmall</Label>
      <Label iconLeft={<GenericInfo />} iconRight={<ControlsClose />}>
        Xsmall
      </Label>
    </div>
  </>
);

export default Example;
