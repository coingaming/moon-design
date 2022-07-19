import React from 'react';
import { ProgressCircular } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <ProgressCircular value={80} size='2xs' bgColor="stroke-goten"/>
    <ProgressCircular value={70} size='xs' bgColor="stroke-goten"/>
    <ProgressCircular value={60} size='sm' bgColor="stroke-goten"/>
    <ProgressCircular value={50} size='md' bgColor="stroke-goten"/>
    <ProgressCircular value={40} size='lg' bgColor="stroke-goten"/>
  </>
);

export default Example;
