import * as React from 'react';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { Navigation } from '../components/nav';
import { HamburgerMenu } from '../components/hamburger-menu';
import { IconCaptionLogo } from '../components/logo/icon-caption-logo';
import { Search } from '../components/search/search';
import { CashierLayout } from '@heathmont/sportsbet-user-portal-components';
import { CashierNav } from '../../cashier/views/deposit/dumb-components/navigations';

export const Nav = () => (
  <Navigation>
    <HamburgerMenu />
    <IconCaptionLogo />
    <Search
      placeholder="Search for a match, event, player etc ..."
      onSubmit={e => {
        e.preventDefault();
        console.log('submit');
      }}
    />
    <Link secondary href="#">
      Sign in
    </Link>
    <Button modifier="primary">Register</Button>
    <CashierLayout>
      <CashierNav />
    </CashierLayout>
  </Navigation>
);
