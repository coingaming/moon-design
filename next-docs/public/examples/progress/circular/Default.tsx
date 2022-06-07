import React from 'react';
import { ProgressCircular } from '@heathmont/moon-components';

const Example = () => (
  <>
    <ProgressCircular value={30} fontSize="1rem" strokeWidth={12} />
    <ProgressCircular value={40} fontSize="2rem" strokeWidth={12} />
    <ProgressCircular value={60} fontSize="3rem" strokeWidth={2} />
  </>
);

export default Example;
