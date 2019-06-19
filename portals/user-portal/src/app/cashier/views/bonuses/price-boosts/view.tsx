/** @jsx jsx */
import { default as React, useState } from 'react';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { container } from '@heathmont/sportsbet-utils';
import { Button, Heading, RouteLink } from '@heathmont/sportsbet-components';
import { IconSoccer } from '@heathmont/sportsbet-icons';
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import {
  BonusesHeadingContainer,
  BonusesSubNavigation,
  BonusWrapper,
  CashierLayout,
  PriceBoost,
  PriceBoostCaption,
  StickyNav,
} from '@heathmont/sportsbet-user-portal-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { SubNavigation } from '../../../../nav/components/sub-navigation/sub-nav';
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
      <StickyNav>
        <SubNavigation />
      </StickyNav>
      <CashierLayout>
        <BonusesHeadingContainer>
          <Heading size={'charlie'} as={'h1'}>
            Bonuses
          </Heading>
          <BonusesSubNavigation>
            <Button modifier="secondary">
              <RouteLink as={NavLink} to={'free-bets'}>
                Free bets 1
              </RouteLink>
            </Button>
            <Button modifier="primary">
              <RouteLink as={NavLink} to={'price-boosts'}>
                Price boosts 15
              </RouteLink>
            </Button>
            <Button modifier="secondary">
              <RouteLink as={NavLink} to={'casino'}>
                Casino 12
              </RouteLink>
            </Button>
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
