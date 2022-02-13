import React from 'react';
import { Header } from '@heathmont/moon-core';
import { IconProfile } from '@heathmont/moon-assets';
import { IconAbout } from '@heathmont/moon-assets';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Header icons={[<IconProfile />, <IconAbout />]}>Title</Header>
  </div>
);

export default Example;
