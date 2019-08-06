import * as React from 'react';
import styled from '@emotion/styled';
import {
  inlineSVG,
  InlineSVGProps,
  mq,
  spacing,
} from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { cardGradientSizes } from '@heathmont/sportsbet-components/lib/card/utils';
import rem from 'polished/lib/helpers/rem';
import { IconSuccess } from '@heathmont/sportsbet-icons';

import {
  userPortalContainer,
  userPortalContainerInner,
} from '../../shared/container';

export const AddWalletsContainer = styled.div({
  ...userPortalContainer,
  ...userPortalContainerInner,
  marginTop: spacing('medium'),
  marginBottom: spacing('large'),
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: spacing(),
  [mq(breakpoints.medium)]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    columnGap: spacing('medium'),
    rowGap: spacing('medium'),
  },
});

const Container: React.FC<{
  backgroundIcon?: InlineSVGProps | false | undefined;
  active?: boolean;
}> = styled.div(({ backgroundIcon, active }) => [
  {
    backgroundColor: colors.neutral[70],
    paddingTop: spacing(),
    paddingBottom: spacing(),
    paddingRight: spacing('large'),
    paddingLeft: spacing('medium'),
    borderRadius: rem(4),
    position: 'relative',
    minHeight: rem(115),
    Button: {
      marginTop: spacing('medium'),
    },
  },
  backgroundIcon && {
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'luminosity',
    backgroundImage: inlineSVG(backgroundIcon),
    backgroundSize: `auto 75%, ${cardGradientSizes}`,
    backgroundPosition: `center right ${spacing()}`,
  },
  active && {
    boxShadow: `${rem(4)} ${rem(4)} ${rem(12)} rgba(0, 0, 0, 0.5)`,
    '& > svg': {
      top: spacing(),
      right: spacing(),
      position: 'absolute',
      fontSize: rem(18),
    },
  },
]);

export const AddWalletCard = ({
  children,
  active,
  backgroundIcon,
}: {
  children: JSX.Element | JSX.Element[];
  active?: boolean;
  backgroundIcon?: InlineSVGProps | false | undefined;
}) => {
  return (
    <Container backgroundIcon={backgroundIcon} active={active}>
      {children}
      {active && <IconSuccess backgroundColor={colors.brand} />}
    </Container>
  );
};
