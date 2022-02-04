import React from 'react';
import { Sidebar } from '@heathmont/moon-sidebar';
import {
  IconChevronLeftRounded,
  IconChevronRightRounded,
  IconBitcoinTalk,
} from '@heathmont/moon-assets';
import { Inline } from '@heathmont/moon-components';

const Example = () => {
  return (
    <>
      <Sidebar
        collapseIcon={<IconChevronLeftRounded />}
        expandIcon={<IconChevronRightRounded />}
        logo={
          <Inline fontSize="2rem">
            <IconBitcoinTalk />
          </Inline>
        }
      >
        Something
      </Sidebar>
    </>
  );
};

export default Example;
