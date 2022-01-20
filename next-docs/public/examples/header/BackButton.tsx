import React from 'react';

import { Header } from '@heathmont/moon-core';
import { IconArrowLeft } from '@heathmont/moon-assets';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Header backButton={<IconArrowLeft />}>Title</Header>
  </div>
);

export default Example;
