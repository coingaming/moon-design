import * as React from 'react';
import styled from '@emotion/styled';
import { colors, typography } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { EventProps } from '..';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconLogoPlain } from '@heathmont/sportsbet-icons';
import { Market } from '../shared/market';
import { Selection } from '../shared/selections';
import { backgroundStripes, betBoostHighlightColors } from '../shared/utils';

export type OutRightProps = {
  event: EventProps;
  badges?: React.FC[];
  boosted?: boolean;
};

const Container = styled.div(({ boosted }: { boosted?: boolean }) => [
  {
    display: 'flex',
    backgroundColor: colors.neutral[90],
    maxWidth: rem(320),
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexBasis: '100%',
    border: `${rem(1)} solid ${colors.neutral[90]}`,
  },
  boosted && {
    borderColor: betBoostHighlightColors.border,
  },
]);

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

const Title = styled.span(({ boosted }: { boosted?: boolean }) => [
  boosted && {
    color: betBoostHighlightColors.text,
  },
]);

const ContentContainer = styled.div({
  ...backgroundStripes,
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

export const OutRight = ({ event, badges, boosted }: OutRightProps) => {
  const { onClick } = event;

  return (
    <Container boosted={boosted}>
      <Header onClick={onClick}>
        <Title boosted={boosted}>{event.name}</Title>
      </Header>
      <ContentContainer>
        <Content>
          <IconLogoPlain color={colors.neutral[20]} />
          <p>{event.market.name}</p>
        </Content>
      </ContentContainer>
      <Selection boosted={boosted} selection={event.market.selection} />
      <Market
        onClick={onClick}
        marketCount={event.marketCount}
        videoStream={event.videoStream}
        badges={badges}
      />
    </Container>
  );
};
