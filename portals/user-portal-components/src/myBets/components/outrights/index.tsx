import * as React from 'react';
import styled from '@emotion/styled';
import { colors, typography } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { EventProps } from '..';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconLogoPlain } from '@heathmont/sportsbet-icons';
import { Market } from '../shared/market';
import { Selection } from '../shared/selections';
import { backGroundStripes, BadgeWrapper } from '../shared/utils';

export type OutRightProps = {
  event: EventProps;
  badges?: React.FC[];
};

const Container = styled.div({
  display: 'flex',
  backgroundColor: colors.neutral[90],
  maxWidth: rem(320),
  flexWrap: 'wrap',
  justifyContent: 'center',
  flexBasis: '100%',
});

const Header = styled.div(({ onClick }) => [
  {
    fontSize: rem(12),
    fontWeight: 600,
    width: '100%',
    textAlign: 'center',
    paddingLeft: spacing(),
    paddingRight: spacing(),
    height: rem(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onClick && {
    cursor: 'pointer',
  },
]);

const ContentContainer = styled.div({
  ...backGroundStripes,
  width: '100%',
  borderRadius: '2px',
  height: rem(120),
  display: 'flex',
  alignItems: 'center',
});

const Content = styled.div({
  width: '100%',
  fontWeight: typography.fontWeight.semibold,
  paddingTop: spacing('medium'),
  paddingBottom: spacing('medium'),
  paddingLeft: spacing('xlarge'),
  paddingRight: spacing('xlarge'),
  backgroundColor: colors.neutral[90],
  display: 'flex',
  alignItems: 'center',
  marginTop: `-${spacing('small')}`,
  '& > svg': {
    fontSize: rem(37),
    marginRight: spacing('large'),
    flexGrow: 0,
    flexShrink: 0,
  },
});

export const OutRight = ({ event, badges }: OutRightProps) => {
  const { onClick } = event;

  return (
    <Container>
      <Header onClick={onClick}>
        <span>{event.name}</span>
        {badges &&
          badges.map((badge, index) => {
            /* @TODO Revisit post-EPL */
            /* eslint-disable-next-line react/no-array-index-key */
            return <BadgeWrapper key={index}>{badge}</BadgeWrapper>;
          })}
      </Header>
      <ContentContainer>
        <Content>
          <IconLogoPlain color={colors.neutral[20]} />
          <p>{event.market.name}</p>
        </Content>
      </ContentContainer>
      <Selection selection={event.market.selection} />
      <Market
        onClick={onClick}
        market={event.market}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
      />
    </Container>
  );
};
