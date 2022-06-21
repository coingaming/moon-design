import React from 'react';
import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col gap-2 pl-4">
    <p>Please select your age:</p>
    <RadioButton name="age" label="0 - 30" ariaLabel="0 - 30" id="age1" />
    <RadioButton name="age" label="31 - 60" ariaLabel="31 - 60" id="age2" />
    <RadioButton name="age" label="61 - 100" ariaLabel="61 - 100" id="age3" />
  </div>
);

export default Example;
