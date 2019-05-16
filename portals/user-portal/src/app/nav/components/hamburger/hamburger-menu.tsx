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

import { HamburgerDetails } from './hamburger-details';

const Details = styled.details<{ open?: boolean; onToggle?: any }>({
  marginRight: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
  '&[open]': {
    summary: {
      position: 'absolute',
      zIndex: 3,
      top: spacing('medium'),
      left: spacing(),
      [mq(breakpoints.small)]: {
        left: spacing('medium'),
      },
    },
    backgroundColor: colors.neutral[90],
  },
});

const Summary = styled.summary({
  '&::-webkit-details-marker': {
    display: 'none',
  },
});

const DetailsOverlay = styled.div({
  zIndex: 2,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  overflow: 'hidden',
  height: '200vh',
  background: colors.neutral[90],
});

const StyledHamburgerIcon: CSSObject = {
  color: colors.neutral[20],
  '&:hover': {
    color: `${colors.neutral[10]}`,
  },
};

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

const SummaryHamburgerMenu = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: spacing(),
  [mq(breakpoints.small)]: {
    marginLeft: 0,
  },
  color: colors.neutral[20],
  '&:hover': {
    color: `${colors.neutral[10]}`,
  },
});

const MenuCaption = styled.p({
  marginLeft: spacing('small'),
  marginTop: 0,
  textTransform: 'uppercase',
  fontSize: rem(12),
  letterSpacing: rem(1),
});

export const HamburgerMenu = () => {
  const [open, toggle] = useState(false);

  return (
    <Details
      open={open}
      onToggle={() => {
        toggle(!open);
      }}
    >
      <Summary>
        {open ? (
          <Close>
            <IconClose css={StyledHamburgerIcon} />
          </Close>
        ) : (
          <SummaryHamburgerMenu>
            <IconHamburger />
            <MenuCaption>Menu</MenuCaption>
          </SummaryHamburgerMenu>
        )}
      </Summary>
      <DetailsOverlay>
        <HamburgerDetails />
      </DetailsOverlay>
    </Details>
  );
};
