/** @jsx jsx */
import { Fragment, useState } from 'react';
import { jsx } from '@emotion/core';
import { Badge, Button } from '@heathmont/sportsbet-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { GroupIconSports, IconHyperlink } from '@heathmont/sportsbet-icons';
import {
  CashierHeading,
  CashierLayout,
  FootballScoreboard,
  MyBetContainerHeader,
  MyBetContainerHeaderBetDetails,
  MyBetHeader,
  MyBetHeaderCaption,
  ScoreboardsContainer,
  TennisScoreboard,
  StickyNav,
  OutRight,
  MyBetAccordion,
  MyBetFooterActions,
  MyBetFooterIcons,
  MyBetHeaderDate,
  MyBetContainerHeaderDate,
  MyBetHeaderGreenText,
  MyBetHeaderText,
} from '@heathmont/sportsbet-user-portal-components';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import {
  event,
  footballEventNoStream,
  tennis1,
  tennis2,
  liveBadge,
  wonBadge,
  activeBadge,
  outRightEvent,
} from './dummyData';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';

jsx;

export const MyBetsView = () => {
  const [isUserLoggedIn, login] = useState(false);

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
        <CashierHeading>My Bets</CashierHeading>
        <MyBetContainerHeader>
          <MyBetContainerHeaderBetDetails>
            Bet Details
          </MyBetContainerHeaderBetDetails>
          <span>Stake</span>
          <span>Odds</span>
          <span>Potential win</span>
          <MyBetContainerHeaderDate>Date / Time</MyBetContainerHeaderDate>
        </MyBetContainerHeader>
        <MyBetAccordion
          header={
            <Fragment>
  <MyBetHeader>
                <span>Campino M / Hamaliy E</span>
                <MyBetHeaderDate>17.11.2018 08:53</MyBetHeaderDate>
                <MyBetHeaderCaption>Odds</MyBetHeaderCaption>
                <MyBetHeaderText>5.2</MyBetHeaderText>
                <MyBetHeaderCaption>Stake</MyBetHeaderCaption>
                <MyBetHeaderText>150 EUR</MyBetHeaderText>
                <MyBetHeaderCaption>Potential win</MyBetHeaderCaption>
                <MyBetHeaderGreenText>285 EUR</MyBetHeaderGreenText>
              </MyBetHeader>
</Fragment>
          }
          footer={
            <Fragment>
  <MyBetFooterIcons>
                <GroupIconSports name="sport-americanfootball" />
                <GroupIconSports name="sport-basketball" />
                <GroupIconSports name="sport-volleyball" />
                <GroupIconSports name="sport-golf" />
                <Badge backgroundColor={colors.palette.cell[100]}>Active</Badge>
              </MyBetFooterIcons>
  <MyBetFooterActions>
                <p>
      <span>200</span> EUR
    </p>
                <Button modifier="optional">Cash out</Button>
                <IconHyperlink
      backgroundColor={colors.palette.goku[100]}
      color={colors.palette.trunks[100]}
    />
              </MyBetFooterActions>
</Fragment>
          }
        >
          <ScoreboardsContainer>
            <OutRight event={outRightEvent} badges={[wonBadge]} />
            <FootballScoreboard
              event={footballEventNoStream}
              timer="12:11"
              badges={[wonBadge]}
              boosted
            />
            <TennisScoreboard
              boosted
              event={tennis1}
              timer="45:21"
              badges={[liveBadge, activeBadge]}
            />
            <TennisScoreboard event={tennis2} timer="Set 2" />
            <OutRight boosted event={outRightEvent} />
            <OutRight event={outRightEvent} />
          </ScoreboardsContainer>
        </MyBetAccordion>
        <MyBetAccordion
          header={
            <Fragment>
  <MyBetHeader>
                <span>
      <Badge backgroundColor={colors.palette.cell[100]}>
                    Multi
                  </Badge>
      <Badge backgroundColor={colors.palette.cell[100]}>3</Badge>
    </span>
                <MyBetHeaderDate>17.11.2018 08:53</MyBetHeaderDate>
                <MyBetHeaderCaption>Odds</MyBetHeaderCaption>
                <MyBetHeaderText>5.2</MyBetHeaderText>
                <MyBetHeaderCaption>Stake</MyBetHeaderCaption>
                <MyBetHeaderText>150 EUR</MyBetHeaderText>
                <MyBetHeaderCaption>Potential win</MyBetHeaderCaption>
                <MyBetHeaderGreenText>285 EUR</MyBetHeaderGreenText>
              </MyBetHeader>
</Fragment>
          }
          footer={
            <Fragment>
  <MyBetFooterIcons>
                <GroupIconSports name="sport-americanfootball" />
                <GroupIconSports name="sport-basketball" />
                <GroupIconSports name="sport-volleyball" />
                <GroupIconSports name="sport-golf" />
                <Badge backgroundColor={colors.palette.cell[100]}>Active</Badge>
              </MyBetFooterIcons>
  <MyBetFooterActions>
                <p>
      <span>200</span> EUR
    </p>
                <Button modifier="optional">Cash out</Button>
                <IconHyperlink
      backgroundColor={colors.palette.goku[100]}
      color={colors.palette.trunks[100]}
    />
              </MyBetFooterActions>
</Fragment>
          }
        >
          <ScoreboardsContainer>
            <OutRight event={outRightEvent} badges={[wonBadge]} />
            <FootballScoreboard
              event={footballEventNoStream}
              timer="12:11"
              badges={[wonBadge]}
              boosted
            />
            <TennisScoreboard
              boosted
              event={tennis1}
              timer="45:21"
              badges={[liveBadge, activeBadge]}
            />
            <TennisScoreboard event={tennis2} timer="Set 2" />
            <OutRight boosted event={outRightEvent} />
            <OutRight event={outRightEvent} />
          </ScoreboardsContainer>
        </MyBetAccordion>
      </CashierLayout>
    </Fragment>
  );
};
