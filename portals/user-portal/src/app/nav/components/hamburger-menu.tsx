/** @jsx jsx */ jsx;
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { IconHamburger, IconArrowLeft } from '@heathmont/sportsbet-icons';
import { HamburgerDetails } from './hamburger/hamburger-details';

const StyledHamburgerIcon: CSSObject = {
  color: colors.neutral[20],
};

const Details = styled.details<{ open?: boolean }>(({ open }) => [
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
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: colors.neutral[90],
});

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
          <IconArrowLeft css={StyledHamburgerIcon} />
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
