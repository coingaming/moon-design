import React from 'react';
import { ProgressCircular } from '@heathmont/moon-components';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <ProgressCircular
      value={30}
      fontSize="5rem"
      strokeWidth={12}
      isRtl={true}
    />
    <ProgressCircular
      value={40}
      fontSize="8rem"
      strokeWidth={12}
      isRtl={true}
    />
    <ProgressCircular value={60} fontSize="5rem" strokeWidth={2} isRtl={true} />
  </div>
);

export default Example;
