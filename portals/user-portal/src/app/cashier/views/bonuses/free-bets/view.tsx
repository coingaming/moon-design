/** @jsx jsx */
import { default as React, useState } from 'react';
import { container } from '@heathmont/sportsbet-utils';
import { RewardsNav } from '../dumb-components/navigation';
import { Button, Heading } from '@heathmont/sportsbet-components';
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import {
  BonusesHeadingContainer,
  BonusesSubNavigation,
  CashierLayout,
  FreeBet,
  FreeBetCaption,
  FreeBetInfo,
  FreeBetInfoContainer,
  FreeBetsWrapper,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
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
        <FreeBetsWrapper>
          {freebets.map((freebet, i) => (
            <React.Fragment key={i}>
              <FreeBet>
                <Heading size="echo" as="h5">
                  Free bet title
                </Heading>
                <FreeBetCaption>
                  The bonus needs to be wagered 35 times within 30 days before
                  you can make a withdrawal.
                </FreeBetCaption>
                <FreeBetInfoContainer>
                  <FreeBetInfo>
                    <span>Bonus amount</span>
                    <p>6mBTC</p>
                  </FreeBetInfo>
                  <FreeBetInfo>
                    <span>Bonus amount</span>
                    <p>
                      6 Days <span>- 18.03.2018</span>
                    </p>
                  </FreeBetInfo>
                </FreeBetInfoContainer>
                <div>
                  <Button disabled modifier="secondary">
                    Use now
                  </Button>
                </div>
              </FreeBet>
              <FreeBet>
                <Heading size="echo" as="h5">
                  Free bet title
                </Heading>
                <FreeBetCaption>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </FreeBetCaption>
                <FreeBetInfoContainer>
                  <FreeBetInfo>
                    <span>Bonus amount</span>
                    <p>6mBTC</p>
                  </FreeBetInfo>
                  <FreeBetInfo>
                    <span>Bonus amount</span>
                    <p>
                      6 Days <span>- 18.03.2018</span>
                    </p>
                  </FreeBetInfo>
                </FreeBetInfoContainer>
                <div>
                  <Button modifier="secondary">Use now</Button>
                </div>
              </FreeBet>
            </React.Fragment>
          ))}
        </FreeBetsWrapper>
      </CashierLayout>
    </React.Fragment>
  );
};
