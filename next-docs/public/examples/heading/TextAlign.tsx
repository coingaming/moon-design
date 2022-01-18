import React from 'react';

import { Heading } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Heading textAlign={'center'}>Title</Heading>
    <Heading textAlign={'right'}>Title</Heading>
  </div>
);

export default Example;
