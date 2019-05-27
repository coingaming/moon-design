import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { FootballSelections } from './FootballSelections';
import { Market } from '../Market';
import * as React from 'react';
import { EventProps } from '../Scoreboard';
import { colors } from '@heathmont/sportsbet-tokens';
import { Badge } from '@heathmont/sportsbet-components';

export type FootballProps = {
  event: EventProps;
  timer: string;
  badges?: { color?: string; backgroundColor?: string; title: string }[];
};

export const FootballScoreboard = ({ event, timer, badges }: FootballProps) => {
  const Container = styled.div(() => ({
    display: 'flex',
    paddingTop: spacing('small'),
    backgroundColor: colors.neutral[90],
    maxWidth: rem(320),
    flexWrap: 'wrap',
    justifyContent: 'center',
  }));

  const Header = styled.span(onClick => [
    {
      color: colors.text,
      gridArea: 'title',
      textAlign: 'left',
      fontSize: rem(12),
      height: rem(40),
      alignItems: 'center',
      display: 'flex',
      paddingLeft: spacing(),
      paddingRight: spacing(),
      justifyContent: 'space-between',
      width: '100%',
    },
    onClick && {
      cursor: 'pointer',
    },
  ]);

  const TitleContainer = styled.div(() => [
    {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      overflow: 'hidden',
      '& > span': {
        marginRight: rem(9),
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
  ]);

  const Timer = styled.span(() => [
    {
      color: colors.neutral[20],
      textAlign: 'right',
      marginLeft: rem(10),
      whiteSpace: 'nowrap',
    },
  ]);

  const BadgeWrapper = styled.div(() => ({
    marginLeft: spacing('xsmall'),
  }));

  const Score = styled.span(() => ({
    color: colors.text,
    textAlign: 'center',
    alignSelf: 'flex-end',
    height: rem(48),
    fontSize: rem(32),
    lineHeight: rem(30),
    '.separator': {
      color: colors.neutral[20],
      margin: `0 ${spacing('xsmall')}`,
    },
  }));

  const Logos = styled.div(() => [
    {
      paddingLeft: spacing('medium'),
      paddingRight: spacing('medium'),
      height: rem(72),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexGrow: 1,
    },
  ]);

  const Logo = styled.div(onClick => [
    {
      width: rem(88),
      img: {
        maxWidth: '100%',
        padding: `${spacing('small')}`,
      },
    },
    onClick && { cursor: 'pointer' },
  ]);

  const Competitors = styled.div(() => [
    {
      height: rem(40),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexGrow: 1,
      paddingLeft: spacing('small'),
      paddingRight: spacing('small'),

      span: {
        width: rem(120),
        textAlign: 'center',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxHeight: '100%',
      },
    },
  ]);

  const { onClick } = event;

  return (
    <Container>
      <Header onClick={onClick}>
        <TitleContainer>
          <span>{event.name}</span>
          {badges &&
            badges.map((badge, index) => {
              const { color, backgroundColor, title } = badge;
              return (
                <BadgeWrapper key={index}>
                  <Badge color={color} backgroundColor={backgroundColor}>
                    {title}
                  </Badge>
                </BadgeWrapper>
              );
            })}
        </TitleContainer>
        <Timer>{timer}</Timer>
      </Header>
      <Logos>
        <Logo onClick={onClick}>
          <img
            alt={event.competitors.home.name}
            src={event.competitors.home.image}
          />
        </Logo>
        <Score>
          <span>{event.information.homeScore}</span>
          <span className="separator">:</span>
          <span>{event.information.awayScore}</span>
        </Score>
        <Logo onClick={onClick}>
          <img
            alt={event.competitors.away.name}
            src={event.competitors.away.image}
          />
        </Logo>
      </Logos>
      <Competitors>
        <span>{event.competitors.home.name}</span>
        <span>{event.competitors.away.name}</span>
      </Competitors>
      <FootballSelections selections={event.markets[0].selections} />
      <Market
        onClick={onClick}
        market={event.markets[0]}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
      />
    </Container>
  );
};
