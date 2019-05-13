/** @jsx jsx */ jsx;
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { IconHamburger, IconClose } from '@heathmont/sportsbet-icons';
import { mq } from '@heathmont/sportsbet-utils/lib/mq';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';
import { Button } from '@heathmont/sportsbet-components';

import { HamburgerDetails } from './hamburger/hamburger-details';

const StyledHamburgerIcon: CSSObject = {
  color: colors.neutral[20],
  '&:hover': {
    color: `${colors.neutral[10]}`,
  },
};

const Details = styled.details<{ open?: boolean }>(({ open }) => [
  {
    marginRight: spacing('small'),
  },
  {
    [mq(breakpoints.medium)]: {
      display: 'none',
    },
  },
  {
    '&[open]': {
      summary: {
        position: 'absolute',
        zIndex: 999,
      },
      backgroundColor: colors.neutral[90],
      // '&::-webkit-details-marker': {
      //   display: 'none',
      // }
    },
  },
]);

const Summary = styled.summary({
  '&::-webkit-details-marker': {
    display: 'none',
  },
});

const DetailsDialog = styled.div({
  zIndex: 2,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '160vh',
  background: colors.neutral[90],
});

const Close = styled.div({
  width: rem(40),
  height: rem(40),
  borderRadius: rem(40),
  backgroundColor: colors.neutral[70],
  color: colors.neutral[20],
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
});

const hover: CSSObject = {
  '&:hover': {
    color: `${colors.neutral[10]}`,
  },
};

export const HamburgerMenu = () => {
  const [open, toggle] = useState(false);

  return (
    <Details open={open}>
      <Summary
        onClick={() => {
          toggle(!open);
        }}
      >
        {open ? (
          <Close>
            <IconClose css={StyledHamburgerIcon} />
          </Close>
        ) : (
          <IconHamburger css={StyledHamburgerIcon} />
        )}
      </Summary>
      <DetailsDialog>
        <HamburgerDetails />
      </DetailsDialog>
    </Details>
  );
};
