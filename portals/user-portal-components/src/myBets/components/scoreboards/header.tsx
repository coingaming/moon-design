import * as React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { betBoostHighlightColors } from '../shared/betboostmodifier';

const Wrapper = styled.div(({ onClick }) => [
  {
    color: colors.neutral[10],
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

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  overflow: 'hidden',
});

const Header = styled.span(({ boosted }: { boosted?: boolean }) => [
  {
    marginRight: spacing('small'),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  boosted && {
    color: betBoostHighlightColors.text,
  },
]);

const Timer = styled.span({
  color: colors.neutral[20],
  textAlign: 'right',
  marginLeft: rem(10),
  whiteSpace: 'nowrap',
});

const BadgeWrapper = styled.div({
  marginLeft: spacing('xsmall'),
});

export const ScoreBoardHeader = ({
  title,
  timer,
  badges,
  onClick,
  boosted,
}: {
  title: string;
  timer: string;
  badges?: React.FC[];
  onClick?: () => void;
  boosted?: boolean;
}) => (
  <Wrapper onClick={onClick}>
    <Container>
      <Header boosted={boosted}>{title}</Header>
      {badges &&
        badges.map((badge, index) => {
          /* @TODO Revisit post-EPL */
          /* eslint-disable-next-line react/no-array-index-key */
          return <BadgeWrapper key={index}>{badge}</BadgeWrapper>;
        })}
    </Container>
    <Timer>{timer}</Timer>
  </Wrapper>
);
