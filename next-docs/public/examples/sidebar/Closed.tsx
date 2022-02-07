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
        isOpen={false}
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
