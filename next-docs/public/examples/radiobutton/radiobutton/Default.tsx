import React from 'react';

import { RadioButton } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col">
    <h4 className="mb-2">Please select your age:</h4>
    <div className="mb-2 ml-2">
      <RadioButton name="age" label="0 - 30" ariaLabel="0 - 30" id="age1" />
    </div>
    <div className="mb-2 ml-2">
      <RadioButton name="age" label="31 - 60" ariaLabel="31 - 60" id="age2" />
    </div>
    <div className="mb-2 ml-2">
      <RadioButton name="age" label="61 - 100" ariaLabel="61 - 100" id="age3" />
    </div>
  </div>
);

export default Example;
