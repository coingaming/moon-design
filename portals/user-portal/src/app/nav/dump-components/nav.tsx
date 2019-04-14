import * as React from 'react';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { Navigation } from '../components/nav';
import { colors } from '@heathmont/sportsbet-tokens';
import { HamburgerMenu } from '../components/hamburger-menu';
import { IconCaptionLogo } from '../components/logo/icon-caption-logo';
import { Search } from '../components/search/search';
import { CashierLayout } from '../../cashier/components/layout';
import { CashierNav } from '../../cashier/views/deposit/dumb-components/navigations';
import styled from '@emotion/styled';

const NavLayout = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
});

// const NavLayout = styled.div({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   width: '100%',
// });

// export const Nav = () => (
//   <Navigation>
//     <NavLayout>
//       <HamburgerMenu />
//       <IconCaptionLogo />
//       <Search
//         placeholder="Search for a match, event, player etc ..."
//         onSubmit={e => {
//           e.preventDefault();
//           console.log('submit');
//         }}
//       />
//       <Link secondary href="#">
//         Sign in
//       </Link>
//       <Button modifier="primary">Register</Button>
//     </NavLayout>
//     <CashierLayout>
//       <CashierNav />
//     </CashierLayout>
//   </Navigation>
// );

export const Nav = () => (
  <Navigation>
    <NavLayout>
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
    </NavLayout>
    <CashierLayout>
      <CashierNav />
    </CashierLayout>
  </Navigation>
);
