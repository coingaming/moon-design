import React from 'react';
import { ProgressLinear } from '@heathmont/moon-components';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <ProgressLinear
      value={30}
      text={<span>Progress</span>}
      backgroundColor="hit.100"
    />
    <ProgressLinear
      value={30}
      text={<span>Progress</span>}
      backgroundColor="hit.100"
      height={5}
    />
  </div>
);

export default Example;
