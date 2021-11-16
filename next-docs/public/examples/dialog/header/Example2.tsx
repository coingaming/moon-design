import React from 'react';

import { rem } from '@heathmont/moon-utils';
import { Header } from '@heathmont/moon-core';
import { ControlsChevronLeft, ControlsClose } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex flex-col">
    <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
      <Header
        backButton={<ControlsChevronLeft fontSize={rem(32)} />}
        closeButton={<ControlsClose fontSize={rem(32)} />}
      >
        Title of the modal
      </Header>
    </div>
    <div className="flex justify-around items-center w-full max-w-screen-sm mb-4">
      <Header
        backButton={<ControlsChevronLeft fontSize={rem(32)} />}
        closeButton={<ControlsClose fontSize={rem(32)} />}
      />
    </div>
  </div>
);

export default Example;
