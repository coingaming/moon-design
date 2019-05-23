import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { css } from '@emotion/core';
import { FootballSelections } from './FootballSelections';
import { Market } from '../Market';
import * as React from 'react';
import { EventProps } from '../Scoreboard';

export type FootballProps = {
  event: EventProps;
  timer: string;
};

export const FootballScoreboard = ({ event, timer }: FootballProps) => {
  const Container = styled.div(() => ({
    padding: `${spacing()} 0`,
    display: 'grid',
    backgroundColor: '#1A212A',
    maxWidth: rem(320),
    gridTemplateAreas:
      "'. title .' " +
      "'home score away' " +
      "'odds odds odds'" +
      "'icon marketName marketCount'",
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto',
  }));

  const Title = styled.span(onClick => [
    {
      color: '#fff',
      gridArea: 'title',
      textAlign: 'center',
      fontSize: rem(12),
      marginBottom: spacing('small'),
    },
    onClick && {
      cursor: 'pointer',
    },
  ]);

  const Score = styled.span(() => ({
    color: '#fff',
    gridArea: 'score',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: rem(32),
    '.separator': {
      color: '#8697A2',
      margin: `0 ${spacing('small')}`,
    },
  }));

  const TimeRemaining = styled.span(() => ({
    color: '#8998A3',
    display: 'block',
    fontSize: rem(12),
    marginTop: spacing('small'),
  }));

  const CompetitorStyles = css({
    textAlign: 'center',
    alignSelf: 'center',
    img: {
      maxWidth: '100%',
      padding: `0 ${spacing()}`,
    },
    span: {
      fontSize: rem(14),
      display: 'flex',
      height: rem(40),
      alignItems: 'center',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    },
  });

  const Home = styled.div(onClick => [
    CompetitorStyles,
    {
      gridArea: 'home',
      paddingLeft: spacing(),
    },
    onClick && { cursor: 'pointer' },
  ]);
  const Away = styled.div(onClick => [
    CompetitorStyles,
    {
      gridArea: 'away',
      paddingRight: spacing(),
    },
    onClick && { cursor: 'pointer' },
  ]);

  return (
    <Container>
      <Title onClick={event.onClick ? event.onClick : undefined}>
        {event.name}
      </Title>
      <Home onClick={event.onClick ? event.onClick : undefined}>
        <img
          alt={event.competitors.home.name}
          src={event.competitors.home.image}
        />
        <span>{event.competitors.home.name}</span>
      </Home>
      <Score>
        <span>{event.information.homeScore}</span>
        <span className="separator">:</span>
        <span>{event.information.awayScore}</span>
        <TimeRemaining>{timer}</TimeRemaining>
      </Score>
      <Away onClick={event.onClick ? event.onClick : undefined}>
        <img
          alt={event.competitors.away.name}
          src={event.competitors.away.image}
        />
        <span>{event.competitors.away.name}</span>
      </Away>
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
