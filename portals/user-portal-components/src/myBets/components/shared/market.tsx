import * as React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { IconPlay } from '@heathmont/sportsbet-icons/lib/svg/IconPlay';
import { SelectionProps } from './selections';

export type MarketProps = {
  name: string;
  selection: SelectionProps;
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
    width: '100%',
  },
]);

const StreamButton = styled.div(() => [
  {
    cursor: 'pointer',
  },
]);

const MarketName = styled.span(onClick => [
  {
    color: colors.neutral[20],
    textAlign: 'center',
  },
  onClick && { cursor: 'pointer' },
]);

const MarketCount = styled.span(onClick => [
  {
    color: colors.brand,
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
      {videoStream && <IconPlay color={colors.brand} />}
    </StreamButton>
    <MarketName onClick={onClick}>{market.name}</MarketName>
    <MarketCount onClick={onClick}>{`+${marketCount}`}</MarketCount>
  </Wrapper>
);
