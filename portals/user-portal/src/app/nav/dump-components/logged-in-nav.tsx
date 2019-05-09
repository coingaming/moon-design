/** @jsx jsx */
import * as React from 'react';
import { Navigation } from '../components/nav';
import { HamburgerMenu } from '../components/hamburger-menu';
import { IconCaptionLogo } from '../components/logo/icon-caption-logo';
import { Search } from '../components/search/search';
import { CashierNav } from '../../cashier/views/deposit/dumb-components/navigations';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';
import { jsx } from '@emotion/core';
import { HeaderTabs } from '../components/header-tabs/header-tabs';
import { MyBetsCounter, Digit } from '../components/my-bets/my-bets-counter';
import { IconProfile } from '@heathmont/sportsbet-icons';
import { colors, border } from '@heathmont/sportsbet-tokens';
jsx;

export const Nav = () => (
  <Navigation>
    <div css={{ gridArea: 'hamburger', display: 'flex', alignItems: 'center' }}>
      <HamburgerMenu />
      <IconCaptionLogo css={{ marginRight: spacing() }} />
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
      <MyBetsCounter>
        <Digit>0</Digit>
        <Digit>1</Digit>
        <p
          css={{
            color: colors.neutral[20],
            marginTop: 0,
            marginLeft: spacing('small'),
            borderRight: `${border.width}px solid ${colors.neutral[50]}`,
            paddingRight: spacing(),
            marginRight: spacing(),
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          My bets
        </p>
      </MyBetsCounter>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'flex-end',
            marginRight: spacing('medium'),
          }}
        >
          <div css={{ color: colors.neutral[20] }}>Ivergletzeternateigh</div>
          <div>1535.82 mBTC</div>
        </div>
        <IconProfile css={{ color: colors.neutral[20], fontSize: '1.25rem' }} />
      </div>
    </div>
  </Navigation>
);
