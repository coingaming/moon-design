import React from 'react';
import { Label } from '@heathmont/moon-core-tw';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Label size="2xs" iconLeft={<GenericInfo className="text-moon-12" />}>
        Twoxsmall
      </Label>
      <Label size="2xs" iconRight={<ControlsClose className="text-moon-12" />}>
        Twoxsmall
      </Label>
      <Label
        size="2xs"
        iconLeft={<GenericInfo className="text-moon-12" />}
        iconRight={<ControlsClose className="text-moon-12" />}
      >
        Twoxsmall
      </Label>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Label iconLeft={<GenericInfo className="text-moon-16" />}>Xsmall</Label>
      <Label iconRight={<ControlsClose className="text-moon-16" />}>
        Xsmall
      </Label>
      <Label
        iconLeft={<GenericInfo className="text-moon-16" />}
        iconRight={<ControlsClose />}
      >
        Xsmall
      </Label>
    </div>
  </>
);

export default Example;
