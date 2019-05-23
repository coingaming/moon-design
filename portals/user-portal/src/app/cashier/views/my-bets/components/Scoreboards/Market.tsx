import * as React from 'react';
import styled from '@emotion/styled';
import { IconClose } from '@heathmont/sportsbet-icons';
import { SelectionProps } from './Football/FootballSelections';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';

export type MarketProps = {
  id: string;
  name: string;
  selections: SelectionProps[];
};

const Wrapper = styled.div(() => [
  {
    gridArea: 'market',
    height: rem(48),
    padding: `0 ${spacing()}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
]);

const StreamButton = styled.div(() => [
  {
    color: '#8998A3',
    cursor: 'pointer',
  },
]);

const MarketName = styled.span(onClick => [
  {
    color: '#8998A3',
    textAlign: 'center',
  },
  onClick && { cursor: 'pointer' },
]);

const MarketCount = styled.span(onClick => [
  {
    color: '#0CD664',
    textAlign: 'right',
  },
  onClick && { cursor: 'pointer' },
]);

export const Market = ({
  market,
  marketCount,
  videoStream,
  onClick,
}: {
  market: MarketProps;
  marketCount: number;
  videoStream?: boolean;
  onClick?: () => void;
}) => (
  <Wrapper>
    <StreamButton onClick={onClick}>
      {videoStream && <IconClose color={colors.brand} />}
    </StreamButton>
    <MarketName onClick={onClick}>{market.name}</MarketName>
    <MarketCount onClick={onClick}>{`+${marketCount}`}</MarketCount>
  </Wrapper>
);
