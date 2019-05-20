import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { IconHamburger } from '@heathmont/sportsbet-icons';

import {
  HamburgerSummary,
  Close,
  StyledHamburgerIcon,
  SummaryHamburgerMenu,
  MenuCaption,
  DetailsOverlay,
  HamburgerDetails,
} from '@heathmont/sportsbet-user-portal-components';
import { HamburgerDetailsContent } from './hamburger-details';

export const HamburgerMenu = () => {
  const [open, toggle] = useState(false);

  return (
    <HamburgerDetails
      open={false}
      onToggle={() => {
        toggle(!open);
      }}
    >
      <HamburgerSummary>
        {open ? (
          <Close>
            <StyledHamburgerIcon />
          </Close>
        ) : (
          <SummaryHamburgerMenu>
            <IconHamburger />
            <MenuCaption>Menu</MenuCaption>
          </SummaryHamburgerMenu>
        )}
      </HamburgerSummary>
      <DetailsOverlay>
        <HamburgerDetailsContent />
      </DetailsOverlay>
    </HamburgerDetails>
  );
};
