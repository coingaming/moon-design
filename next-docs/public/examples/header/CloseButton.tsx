import React from 'react';
import { Header } from '@heathmont/moon-core';
import { IconClose } from '@heathmont/moon-assets';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Header closeButton={<IconClose />}>Title</Header>
  </div>
);

export default Example;
