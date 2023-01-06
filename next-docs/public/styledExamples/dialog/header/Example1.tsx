import React from 'react';
import { Header } from '@heathmont/moon-core';
import { ControlsClose } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const Example = () => (
  <div className="flex flex-col">
    <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
      <Header>Title of the modal</Header>
    </div>
    <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
      <Header closeButton={<ControlsClose fontSize={rem(32)} />}>
        Title of the modal
      </Header>
    </div>
  </div>
);

export default Example;
