import * as React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { border, colors, typography } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { betBoostHighlightColors } from '../shared/utils';

const Wrapper = styled.div(({ onClick }) => [
  {
    color: colors.neutral[10],
    textAlign: 'left',
    fontSize: rem(12),
    alignItems: 'center',
    display: 'flex',
    paddingLeft: spacing(),
    paddingRight: spacing(),
    paddingTop: spacing('small'),
    paddingBottom: spacing('small'),
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    borderBottom: `${border.width}px solid ${colors.neutral[30]}`,
    fontWeight: typography.fontWeight.semibold,
  },
  onClick && {
    cursor: 'pointer',
  },
]);

const Title = styled.span(({ boosted }: { boosted?: boolean }) => [
  {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginBottom: spacing('small'),
  },
  boosted && {
    color: betBoostHighlightColors.text,
  },
]);

const Container = styled.div({
  display: 'flex',
  width: '100%',
  color: colors.neutral[20],
  overflow: 'hidden',
  justifyContent: 'space-between',
});

const MarketName = styled.span({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const Timer = styled.span({
  whiteSpace: 'nowrap',
  marginLeft: spacing('xsmall'),
});

export const ScoreBoardHeader = ({
  title,
  timer,
  onClick,
  boosted,
  marketName,
}: {
  title: string;
  timer: string;
  onClick?: () => void;
  boosted?: boolean;
  marketName: string;
}) => (
  <Wrapper onClick={onClick}>
    <Title boosted={boosted}>{title}</Title>
    <Container>
      <MarketName>{marketName}</MarketName>
      <Timer>{timer}</Timer>
    </Container>
  </Wrapper>
);
