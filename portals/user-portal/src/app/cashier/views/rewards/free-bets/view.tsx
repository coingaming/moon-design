/** @jsx jsx */
import { default as React, useState } from 'react';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { container } from '@heathmont/sportsbet-utils';
import {
  CashierHeading,
  CashierLayout,
} from '@heathmont/sportsbet-user-portal-components';
import { RewardsNav } from '../dumb-components/navigation';
import {
  Banner,
  BannerToggle,
  Button,
  Card,
  Heading,
} from '@heathmont/sportsbet-components';
import { IconSuccessFlower, IconWarning } from '@heathmont/sportsbet-icons';
import { jsx } from '@emotion/core';
import {
  RewardsHeadingContainer,
  RewardsSubNavigation,
} from '../dumb-components/rewards-navigation';
import { NavLink } from 'react-router-dom';
import {
  Freebet,
  FreebetCaption,
  FreebetsIndicator,
  FreebetsWrapper,
} from './components';
import { colors } from '@heathmont/sportsbet-tokens';
jsx;

export const FreeBetsView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const freebets = [{}, {}, {}, {}, {}, {}, {}];

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <div
        css={[
          {
            position: 'sticky',
            top: 0,
            zIndex: 1,
          },
          { ...container('default') },
          {
            overflowX: 'auto',
          },
        ]}
      >
        <RewardsNav />
      </div>
      <CashierLayout>
        <RewardsHeadingContainer>
          <Heading size={'charlie'} as={'h1'}>
            Bonuses
          </Heading>
          <RewardsSubNavigation>
            <Button modifier="primary">
              <NavLink to={'free-bets'}>Free bets 1</NavLink>
            </Button>
            <Button modifier="secondary">
              <NavLink to={'price-boosts'}>Price boosts 15</NavLink>
            </Button>
            <Button modifier="secondary">
              <NavLink to={'casino'}>Casino 12</NavLink>
            </Button>
          </RewardsSubNavigation>
        </RewardsHeadingContainer>
        <Banner horizontal>
          <div>
            <IconWarning
              color={colors.neutral[80]}
              backgroundColor={colors.warning}
            />
            {'  '}
            Please note that that the minimum odds are 1.5 to place a free bet
          </div>
          <BannerToggle
            onClick={() => {
              console.log('Closed');
            }}
          />
        </Banner>
        <FreebetsWrapper badgeClosed>
          {freebets.map((freebet, i) => (
            <React.Fragment>
              <Freebet inActive>
                <Heading size="echo" as="h5">
                  Free bet title
                </Heading>
                <FreebetCaption>
                  The bonus needs to be wagered 35 times within 30 days before
                  you can make a withdrawal.
                </FreebetCaption>
                <FreebetsIndicator>
                  Used <IconSuccessFlower />
                </FreebetsIndicator>
                <div>
                  <Button disabled modifier="secondary">
                    Use now
                  </Button>
                </div>
              </Freebet>
              <Freebet>
                <Heading size="echo" as="h5">
                  Free bet title
                </Heading>
                <FreebetCaption>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </FreebetCaption>
                <div>
                  <Button modifier="secondary">Use now</Button>
                </div>
              </Freebet>
            </React.Fragment>
          ))}
        </FreebetsWrapper>
      </CashierLayout>
    </React.Fragment>
  );
};
