/** @jsx jsx */
import { Fragment, useState } from 'react';
import { Button, Heading, Link } from '@heathmont/sportsbet-components';
import { IconSoccer } from '@heathmont/sportsbet-icons';
import { jsx } from '@emotion/core';
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
import { NavLink } from 'react-router-dom';
import { SubNavigation } from '../../../../nav/components/sub-navigation/sub-nav';
import { NonLoggedNav } from '../../../../nav/dumb-components/non-logged-in-nav';
import { LoggedInNav } from '../../../../nav/dumb-components/logged-in-nav';

jsx;

export const PriceBoostsView = () => {
  const [isUserLoggedIn, login] = useState(false);
  const cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Fragment>
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
          <Heading size="charlie" as="h1">
            Bonuses
          </Heading>
          <BonusesSubNavigation>
            <Link as={NavLink} to="/bonuses/free-bets" buttonStyled>
              Free bets 1
            </Link>
            <Link as={NavLink} to="/bonuses/price-boosts" buttonStyled>
              Price boosts 15
            </Link>
            <Link as={NavLink} to="/bonuses/casino" buttonStyled>
              Casino 12
            </Link>
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
    </Fragment>
  );
};
