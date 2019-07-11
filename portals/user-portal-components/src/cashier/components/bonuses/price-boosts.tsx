import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import {
  inlineSVG,
  InlineSVGProps,
  mq,
  spacing,
} from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { cardGradientSizes } from '@heathmont/sportsbet-components/lib/card/utils';
import {
  userPortalContainer,
  userPortalContainerInner,
} from '../../../shared/container';

export const BonusWrapper = styled.div({
  ...userPortalContainer,
  ...userPortalContainerInner,
  marginBottom: spacing(),
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: spacing(),
  [mq(breakpoints.medium)]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    columnGap: spacing('medium'),
    rowGap: spacing('large'),
  },
});

export const PriceBoostCaption = styled.p({
  marginTop: spacing('xsmall'),
  color: colors.neutral[20],
});

const Container: React.FC<{
  backgroundIcon?: InlineSVGProps | false | undefined;
}> = styled.div(({ backgroundIcon }) => [
  {
    backgroundColor: colors.neutral[70],
    paddingTop: spacing('medium'),
    paddingLeft: spacing('medium'),
    paddingRight: spacing('medium'),
    paddingBottom: spacing(),
    position: 'relative',
    color: colors.neutral[10],
    boxShadow: `${rem(4)} ${rem(4)} ${rem(12)} rgba(0, 0, 0, 0.5)`,
    borderRadius: rem(4),

    Button: {
      marginTop: spacing('small'),
    },
  },
  backgroundIcon && {
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'luminosity',
    backgroundImage: inlineSVG(backgroundIcon),
    backgroundSize: `auto 50%, ${cardGradientSizes}`,
    backgroundPosition: `center right ${spacing('large')}`,
    [mq(breakpoints.medium)]: {
      backgroundPosition: `center right ${spacing()}`,
    },
  },
]);

export const PriceBoost = ({
  children,
  backgroundIcon,
}: {
  children: JSX.Element | JSX.Element[];
  backgroundIcon?: InlineSVGProps | false | undefined;
}) => {
  return <Container backgroundIcon={backgroundIcon}>{children}</Container>;
};
