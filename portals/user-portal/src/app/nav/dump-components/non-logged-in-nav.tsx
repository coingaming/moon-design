/** @jsx jsx */
import * as React from 'react';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { Navigation } from '../components/nav';
import { colors } from '@heathmont/sportsbet-tokens';
import { HamburgerMenu } from '../components/hamburger-menu';
import { IconCaptionLogo } from '../components/logo/icon-caption-logo';
import { Search } from '../components/search/search';
import { CashierLayout } from '@heathmont/sportsbet-user-portal-components';
import { CashierNav } from '../../cashier/views/deposit/dumb-components/navigations';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';
import { jsx } from '@emotion/core';
import { HeaderTabs } from '../components/header-tabs/header-tabs';
jsx;

const NavLayout = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  flexWrap: 'wrap',
});

export const Nav = () => (
  <Navigation>
    <NavLayout>
      <HamburgerMenu />
      <IconCaptionLogo css={{ marginRight: spacing('medium') }} />
      <HeaderTabs />
      <Search
        placeholder="Search for a match, event, player etc ..."
        onSubmit={e => {
          e.preventDefault();
          console.log('submit');
        }}
      />
      <Link secondary href="#" css={{ marginLeft: 'auto' }}>
        Sign in
      </Link>
      <Button modifier="primary">Register</Button>
    </NavLayout>
    <CashierLayout>
      <CashierNav />
    </CashierLayout>
  </Navigation>
);
