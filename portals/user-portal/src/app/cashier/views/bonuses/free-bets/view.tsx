/** @jsx jsx */
import { default as React, useState } from 'react';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { container } from '@heathmont/sportsbet-utils';
import { RewardsNav } from '../dumb-components/navigation';
import {
  Banner,
  BannerToggle,
  Button,
  Heading,
} from '@heathmont/sportsbet-components';
import { IconSuccessFlower, IconWarning } from '@heathmont/sportsbet-icons';
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import { colors } from '@heathmont/sportsbet-tokens';
import {
  BonusesHeadingContainer,
  BonusesSubNavigation,
  CashierLayout,
  Freebet,
  FreebetCaption,
  FreebetsIndicator,
  FreebetsWrapper,
} from '@heathmont/sportsbet-user-portal-components';
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
        <BonusesHeadingContainer>
          <Heading size={'charlie'} as={'h1'}>
            Bonuses
          </Heading>
          <BonusesSubNavigation>
            <Button modifier="primary">
              <NavLink to={'free-bets'}>Free bets 1</NavLink>
            </Button>
            <Button modifier="secondary">
              <NavLink to={'price-boosts'}>Price boosts 15</NavLink>
            </Button>
            <Button modifier="secondary">
              <NavLink to={'casino'}>Casino 12</NavLink>
            </Button>
          </BonusesSubNavigation>
        </BonusesHeadingContainer>
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
                  Used
                  <IconSuccessFlower color={colors.text} />
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
