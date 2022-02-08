import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { Header } from '@heathmont/moon-core';
import {
  FilesGlasses,
  FilesPrint,
  ControlsClose,
  ControlsChevronLeft,
} from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex justify-around items-center w-full max-w-screen-sm">
    <Header
      backButton={<ControlsChevronLeft fontSize={rem(32)} />}
      closeButton={<ControlsClose fontSize={rem(32)} />}
      icons={[<FilesGlasses />, <FilesPrint />]}
      isDivider={true}
    >
      Title of the modal title of the modal title of the modal
    </Header>
  </div>
);

export default Example;
