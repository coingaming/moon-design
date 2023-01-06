import React from 'react';
import { ProgressLinear } from '@heathmont/moon-components';

const Example = () => (
  <>
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
  </>
);

export default Example;
