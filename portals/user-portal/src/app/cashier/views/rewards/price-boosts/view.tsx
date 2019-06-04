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
import { Button, Card, Heading } from '@heathmont/sportsbet-components';
import { IconSoccer } from '@heathmont/sportsbet-icons';
import { CardCaption, BonusWrapper } from './components';
import { jsx } from '@emotion/core';
import {
  RewardsHeadingContainer,
  RewardsSubNavigation,
} from '../dumb-components/rewards-navigation';
import { NavLink } from 'react-router-dom';
jsx;

export const PriceBoostsView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

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
            <Button modifier="secondary">
              <NavLink to={'free-bets'}>Free bets 1</NavLink>
            </Button>
            <Button modifier="primary">
              <NavLink to={'price-boosts'}>Price boosts 15</NavLink>
            </Button>
            <Button modifier="secondary">
              <NavLink to={'casino'}>Casino 12</NavLink>
            </Button>
          </RewardsSubNavigation>
        </RewardsHeadingContainer>
        <BonusWrapper>
          {cards.map((card, i) => (
            <Card
              key={i}
              flex
              template={'front'}
              backgroundIcon={<IconSoccer />}
            >
              <div>
                <Heading size="echo" as="h5">
                  Soccer
                </Heading>
                <CardCaption>8 Available</CardCaption>
              </div>
              <div>
                <Button modifier="optional">use</Button>
              </div>
            </Card>
          ))}
        </BonusWrapper>
      </CashierLayout>
    </React.Fragment>
  );
};
