/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { IconProfile } from '@heathmont/sportsbet-icons';
import { Navigation } from '../components/nav';
import { HamburgerMenu } from '../components/hamburger/hamburger-menu';
import { HeaderTabs } from '../components/header-tabs/header-tabs';
import {
  MyBets,
  MyBetsDigit,
  MyBetsCaption,
} from '../components/my-bets/my-bets';
import { Search } from '../components/search/search';
import {
  UserhubInfoUsername,
  UserhubInfo,
  Userhub,
  UserhubIconProfile,
  UserhubInfoBalance,
} from '../components/username/username';
jsx;

export const Nav = () => (
  <Navigation>
    <div css={{ gridArea: 'hamburger', display: 'flex', alignItems: 'center' }}>
      <HamburgerMenu />
      <HeaderTabs />
    </div>

    <div css={{ gridArea: 'search', display: 'flex', alignItems: 'center' }}>
      <div css={{ width: '100%' }}>
        <Search
          placeholder="Search for a match, event, player etc ..."
          onSubmit={e => {
            e.preventDefault();
            console.log('submit');
          }}
        />
      </div>
    </div>

    <div
      css={{
        gridArea: 'buttons',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
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
          <IconProfile />
        </UserhubIconProfile>
      </Userhub>
    </div>
  </Navigation>
);
