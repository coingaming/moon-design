/** @jsx jsx */
import * as React from 'react';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { Navigation } from '../components/nav';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { HamburgerMenu } from '../components/hamburger-menu';
import { IconCaptionLogo } from '../components/logo/icon-caption-logo';
import { Search } from '../components/search/search';
import { CashierLayout } from '@heathmont/sportsbet-user-portal-components';
import { CashierNav } from '../../cashier/views/deposit/dumb-components/navigations';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';
import { jsx } from '@emotion/core';
import { HeaderTabs } from '../components/header-tabs/header-tabs';
import { IconLogo } from '../components/logo/icon-logo';
import { mq } from '@heathmont/sportsbet-utils';
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
      <Link
        secondary
        href="#"
        css={{
          marginRight: spacing(),
          whiteSpace: 'nowrap',
          '&::before': {
            content: '""',
            height: spacing(),
            marginRight: spacing(),
            borderLeft: `${border.width}px solid ${colors.neutral[40]}`,
            backgroundColor: colors.neutral[20],
          },
        }}
      >
        Sign in
      </Link>
      <Button modifier="primary">Register</Button>
    </div>
    <div css={{ gridArea: 'nav' }}>
      <CashierNav />
    </div>
  </Navigation>
);
