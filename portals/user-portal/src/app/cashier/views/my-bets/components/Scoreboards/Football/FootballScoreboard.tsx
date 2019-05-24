import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { FootballSelections } from './FootballSelections';
import { Market } from '../Market';
import * as React from 'react';
import { EventProps } from '../Scoreboard';
import { colors } from '@heathmont/sportsbet-tokens';

export type FootballProps = {
  event: EventProps;
  timer: string;
};

export const FootballScoreboard = ({ event, timer }: FootballProps) => {
  const Container = styled.div(() => ({
    display: 'flex',
    paddingTop: spacing('small'),
    backgroundColor: colors.neutral[90],
    maxWidth: rem(320),
    flexWrap: 'wrap',
    justifyContent: 'center',
  }));

  const Title = styled.span(onClick => [
    {
      color: colors.text,
      textAlign: 'center',
      fontSize: rem(12),
      height: rem(24),
      padding: `${rem(4)} ${spacing()} 0`,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    onClick && {
      cursor: 'pointer',
    },
  ]);

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

  const TimeRemaining = styled.span(() => ({
    color: colors.neutral[20],
    display: 'block',
    marginTop: rem(7),
    lineHeight: rem(10),
    fontSize: rem(12),
  }));

  const Logos = styled.div(() => [
    {
      paddingLeft: spacing('medium'),
      paddingRight: spacing('medium'),
      height: rem(88),
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

  return (
    <Container>
      <Title onClick={event.onClick ? event.onClick : undefined}>
        {event.name}
      </Title>
      <Logos>
        <Logo onClick={event.onClick ? event.onClick : undefined}>
          <img
            alt={event.competitors.home.name}
            src={event.competitors.home.image}
          />
        </Logo>
        <Score>
          <span>{event.information.homeScore}</span>
          <span className="separator">:</span>
          <span>{event.information.awayScore}</span>
          <TimeRemaining>{timer}</TimeRemaining>
        </Score>
        <Logo onClick={event.onClick ? event.onClick : undefined}>
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
        onClick={event.onClick ? event.onClick : undefined}
        market={event.markets[0]}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
      />
    </Container>
  );
};
