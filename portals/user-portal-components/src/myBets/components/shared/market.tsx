import * as React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, typography } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { IconPlay } from '@heathmont/sportsbet-icons/lib/svg/IconPlay';

const Wrapper = styled.div(() => [
  {
    height: rem(48),
    padding: `0 ${spacing()}`,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },
]);

const StreamButton = styled.div(() => [
  {
    cursor: 'pointer',
    display: 'flex',
  },
]);

const MarketCount = styled.span(onClick => [
  {
    color: colors.brand,
    textAlign: 'right',
    marginLeft: 'auto',
    fontWeight: typography.fontWeight.semibold,
  },
  onClick && { cursor: 'pointer' },
]);

const BadgeWrapper = styled.div({
  marginLeft: spacing('xsmall'),
  display: 'flex',
});

export const Market = ({
  marketCount,
  videoStream,
  onClick,
  badges,
}: {
  marketCount: number;
  videoStream?: boolean;
  onClick?: () => void;
  badges?: React.FC[];
}) => (
  <Wrapper>
    <StreamButton onClick={onClick}>
      {videoStream && <IconPlay color={colors.brand} />}
    </StreamButton>
    {badges &&
      badges.map((badge, index) => {
        if (!videoStream && !index) {
          return badge;
        }
        /* @TODO Revisit post-EPL */
        /* eslint-disable-next-line react/no-array-index-key */
        return <BadgeWrapper key={index}>{badge}</BadgeWrapper>;
      })}
    <MarketCount onClick={onClick}>{`+${marketCount}`}</MarketCount>
  </Wrapper>
);
