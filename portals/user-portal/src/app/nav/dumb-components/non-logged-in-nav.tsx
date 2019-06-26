/** @jsx jsx */
import * as React from 'react';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { jsx } from '@emotion/core';
import {
  HamburgerSection,
  Logo,
  LogoCaption,
  SearchSection,
  NonLoggedInButtonsSection,
  SignInLink,
  Navigation,
  IconLogo,
  IconLogoCaption,
  Search,
} from '@heathmont/sportsbet-user-portal-components';
import { HamburgerMenu } from '../components/hamburger/hamburger-menu';
import { HeaderTabs } from '../components/header-tabs/header-tabs';

jsx;

export const NonLoggedNav = ({ login }) => (
  <Navigation>
    <HamburgerSection>
      <HamburgerMenu />

      <Logo>
        <IconLogo />
      </Logo>
      <HeaderTabs />
    </HamburgerSection>

    <LogoCaption>
      <IconLogoCaption />
    </LogoCaption>

    <SearchSection>
      <Search
        placeholder="Search for a match, event, player etc ..."
        onSubmit={e => {
          e.preventDefault();
          /* eslint-disable-next-line no-console */
          console.log('submit');
        }}
      />
    </SearchSection>

    <NonLoggedInButtonsSection>
      <SignInLink onClick={login} secondary>
        SIGN IN
      </SignInLink>
      <Button round uppercase modifier="primary" onClick={login}>
        Register
      </Button>
    </NonLoggedInButtonsSection>
  </Navigation>
);
