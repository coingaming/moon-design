import React from 'react';
import { Header } from '@heathmont/moon-core';
import { ControlsClose } from '@heathmont/moon-icons';
import { rem } from "@heathmont/moon-utils";

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Header closeButton={<ControlsClose fontSize={rem(23)}/>}>Title</Header>
  </div>
);

export default Example;
