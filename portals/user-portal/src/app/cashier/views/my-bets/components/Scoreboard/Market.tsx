import * as React from 'react';
import styled from '@emotion/styled';
import { IconClose } from '@heathmont/sportsbet-icons';
import { SelectionProps } from './Selections';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors } from '@heathmont/sportsbet-tokens';

export type MarketProps = {
  id: string;
  name: string;
  selections: SelectionProps[];
};

const StreamButton = styled.div(() => [
  {
    marginTop: spacing(),
    marginLeft: spacing(),
    gridArea: 'icon',
    color: '#8998A3',
    cursor: 'pointer',
  },
]);

const MarketName = styled.span(onClick => [
  {
    marginTop: spacing(),
    gridArea: 'marketName',
    color: '#8998A3',
    textAlign: 'center',
  },
  onClick && { cursor: 'pointer' },
]);

const MarketCount = styled.span(onClick => [
  {
    marginTop: spacing(),
    marginRight: spacing(),
    gridArea: 'marketCount',
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
  <>
    <StreamButton onClick={onClick}>
      {videoStream && <IconClose color={colors.brand} />}
    </StreamButton>
    <MarketName onClick={onClick}>{market.name}</MarketName>
    <MarketCount onClick={onClick}>{`+${marketCount}`}</MarketCount>
  </>
);
