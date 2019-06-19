/** @jsx jsx */
import { default as React, useState } from 'react';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { container } from '@heathmont/sportsbet-utils';
import { RewardsNav } from '../dumb-components/navigation';
import {
  Button,
  Heading,
  Link,
  RouteLink,
} from '@heathmont/sportsbet-components';
import { IconSoccer } from '@heathmont/sportsbet-icons';
import { jsx } from '@emotion/core';
import {
  BonusesHeadingContainer,
  BonusesSubNavigation,
  BonusWrapper,
  CashierLayout,
  PriceBoost,
  PriceBoostCaption,
} from '@heathmont/sportsbet-user-portal-components';
import { colors } from '@heathmont/sportsbet-tokens';
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
        <BonusesHeadingContainer>
          <Heading size={'charlie'} as={'h1'}>
            Bonuses
          </Heading>
          <BonusesSubNavigation>
            <RouteLink to={'free-bets'}>Free bets </RouteLink>
            <RouteLink to={'price-boosts'}>Price boosts 15</RouteLink>
            <RouteLink to={'casino'}>Casino 12</RouteLink>
          </BonusesSubNavigation>
        </BonusesHeadingContainer>
        <BonusWrapper>
          {cards.map(() => (
            <PriceBoost
              backgroundIcon={<IconSoccer color={colors.neutral[20]} />}
            >
              <Heading size="echo" as="h5">
                Soccer
              </Heading>
              <PriceBoostCaption>8 Available</PriceBoostCaption>
              <Button modifier="optional">Use</Button>
            </PriceBoost>
          ))}
        </BonusWrapper>
      </CashierLayout>
    </React.Fragment>
  );
};
