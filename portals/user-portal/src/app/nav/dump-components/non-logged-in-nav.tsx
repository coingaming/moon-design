/** @jsx jsx */
import * as React from 'react';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { Navigation } from '../components/nav';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import { HamburgerMenu } from '../components/hamburger/hamburger-menu';
import { Search } from '../components/search/search';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';
import { jsx } from '@emotion/core';
import { HeaderTabs } from '../components/header-tabs/header-tabs';
import { mq } from '@heathmont/sportsbet-utils';
import { IconLogo } from '../components/logo/icon-logo';
import { IconLogoCaption } from '../components/logo/IconLogoCaption';
jsx;

export const NonLoggedNav = ({ login }) => (
  <Navigation>
    <div css={{ gridArea: 'hamburger', display: 'flex', alignItems: 'center' }}>
      <HamburgerMenu />

      <div
        css={{
          display: 'none',
          [mq(breakpoints.medium)]: {
            display: 'block',
            marginRight: spacing(),
          },
        }}
      >
        <IconLogo />
      </div>
      <HeaderTabs />
    </div>

    <div
      css={{
        gridArea: 'logo',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: spacing(),
        [mq(breakpoints.medium)]: {
          display: 'none',
        },
      }}
    >
      <IconLogoCaption />
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
        marginRight: spacing(),
        [mq(breakpoints.small)]: {
          marginRight: 0,
        },
      }}
    >
      <Link
        onClick={login}
        secondary
        css={{
          marginRight: spacing(),
          whiteSpace: 'nowrap',
          [mq(breakpoints.large)]: {
            '&::before': {
              content: '""',
              height: spacing(),
              marginRight: spacing(),
              borderLeft: `${border.width}px solid ${colors.neutral[40]}`,
              backgroundColor: colors.neutral[20],
            },
          },
        }}
      >
        SIGN IN
      </Link>
      <Button round uppercase modifier="primary" onClick={login}>
        Register
      </Button>
    </div>
  </Navigation>
);
