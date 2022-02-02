import React from 'react';
import { ProgressCircular } from '@heathmont/moon-components';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <ProgressCircular value={30} fontSize="5rem" strokeWidth={12} />
    <ProgressCircular value={40} fontSize="8rem" strokeWidth={12} />
    <ProgressCircular value={60} fontSize="5rem" strokeWidth={2} />
  </div>
);

export default Example;
