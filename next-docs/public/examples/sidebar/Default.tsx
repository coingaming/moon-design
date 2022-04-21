import React from 'react';
import { Sidebar } from '@heathmont/moon-sidebar';
import {
  ControlsChevronLeft,
  ControlsChevronRight,
  ShopCryptoCoin,
} from '@heathmont/moon-icons';
import { Inline } from '@heathmont/moon-components';
import { rem } from "@heathmont/moon-utils";

const Example = () => {
  return (
    <>
      <Sidebar
        collapseIcon={<ControlsChevronLeft fontSize={rem(23)}/>}
        expandIcon={<ControlsChevronRight fontSize={rem(23)}/>}
        logo={
          <Inline fontSize="2rem">
            <ShopCryptoCoin color='krillin.100'/>
          </Inline>
        }
      >
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </Sidebar>
    </>
  );
};

export default Example;
