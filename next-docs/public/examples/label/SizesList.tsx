import React from 'react';
import { Label } from '@heathmont/moon-core';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex flex-col justify-around items-center w-full">
    <div className="flex justify-around items-center w-full mb-4">
      <Label size="small">Small</Label>
      <Label size="small" iconLeft={<GenericInfo />}>
        Small
      </Label>
      <Label size="small" iconRight={<ControlsClose />}>
        Small
      </Label>
      <Label
        size="small"
        iconLeft={<GenericInfo />}
        iconRight={<ControlsClose />}
      >
        Small
      </Label>
    </div>
    <div className="flex justify-around items-center w-full">
      <Label>Medium</Label>
      <Label iconLeft={<GenericInfo />}>Medium</Label>
      <Label iconRight={<ControlsClose />}>Medium</Label>
      <Label iconLeft={<GenericInfo />} iconRight={<ControlsClose />}>
        Medium
      </Label>
    </div>
  </div>
);

export default Example;
