import React from 'react';
import { Label } from '@heathmont/moon-core-tw';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Label size="2xs" iconLeft={<GenericInfo />}>
        Twoxsmall
      </Label>
      <Label size="2xs" iconRight={<ControlsClose />}>
        Twoxsmall
      </Label>
      <Label
        size="2xs"
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
