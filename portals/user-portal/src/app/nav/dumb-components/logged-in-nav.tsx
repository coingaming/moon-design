/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import {
  IconProfile,
  IconLoyality0,
  IconClose,
} from '@heathmont/sportsbet-icons';
import {
  Navigation,
  IconLogo,
  Search,
  MyBets,
  MyBetsDigit,
  MyBetsCaption,
  Userhub,
  UserhubInfo,
  UserhubInfoUsername,
  UserhubInfoBalance,
  UserhubIconProfile,
  HamburgerSection,
  Logo,
  SearchSection,
  LoggedInButtonsSection,
  CenterProfileIcon,
  CloseBack,
} from '@heathmont/sportsbet-user-portal-components';
import { HamburgerMenu } from '../components/hamburger/hamburger-menu';
import { HeaderTabs } from '../components/header-tabs/header-tabs';

jsx;

export const LoggedInNav: React.FC<{ isUserApp?: boolean }> = ({
  isUserApp,
}) => (
  <Navigation>
    <HamburgerSection>
      {isUserApp && (
        <CloseBack optional>
          {' '}
          <IconClose />{' '}
        </CloseBack>
      )}
      {!isUserApp && <HamburgerMenu />}
      <Logo>
        <IconLogo />
      </Logo>
      <HeaderTabs />
    </HamburgerSection>

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

    <LoggedInButtonsSection>
      <MyBets>
        <MyBetsDigit>0</MyBetsDigit>
        <MyBetsDigit>1</MyBetsDigit>
        <MyBetsCaption>My bets</MyBetsCaption>
      </MyBets>
      <Userhub>
        <UserhubInfo>
          <UserhubInfoUsername>Ivergletzeternateigh</UserhubInfoUsername>
          <UserhubInfoBalance>1535.82 mBTC</UserhubInfoBalance>
        </UserhubInfo>
        <UserhubIconProfile>
          <IconLoyality0 />
          <CenterProfileIcon>
            <IconProfile />
          </CenterProfileIcon>
        </UserhubIconProfile>
      </Userhub>
    </LoggedInButtonsSection>
  </Navigation>
);
