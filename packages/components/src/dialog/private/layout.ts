import styled from 'styled-components';
import { rgba, rem } from 'polished';
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog';
import { mq } from '@heathmont/sportsbet-utils';

import { DialogPosition, DialogMaxWidth } from './types';

/* Styled Reach UI Dialog Components
  =========================================== */

/**
 * For further info, see the Reach UI documentation:
 * https://ui.reach.tech/dialog/
 */

export const DialogOverlay = styled(ReachDialogOverlay)(
  ({ theme: { color, zIndex } }) => ({
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    overflow: 'auto',
    backgroundColor: color.gohan[100] && rgba(color.gohan[100], 0.75),
    zIndex: zIndex.dialog,
  })
);

/**
 * 1. Arbitrary figure from design.
 */
export const DialogContent = styled(ReachDialogContent)<
  DialogMaxWidth & DialogPosition
>(({ theme: { space } }) => [
  {
    margin: '0 auto',
    position: 'relative',
    maxWidth: rem(608) /* [1] */,
    padding: rem(space.default),
    outline: 'none',
  },
  ({ maxWidth }) => ({ maxWidth }),
  ({ position }) =>
    position === 'TOP'
      ? { margin: '8vh auto' }
      : { top: '50%', transform: 'translateY(-50%)' },
]);

/* Layout
  =========================================== */

export const DialogContainer = styled.div(
  ({ theme: { color, radius, space } }) => ({
    position: 'relative',
    outline: 'none',
    borderRadius: rem(radius.small),
    color: color.bulma[100],
    background: color.goku[100],
    boxShadow: `0 ${rem(space.default)} ${rem(space.large)} rgba(0, 0, 0, 0.5)`,
  })
);

/**
 * 1. As bottom margins/paddings are ignored in `overflow: scroll;`, create the
 *    padding with a pseudo element.
 */
export const DialogMain = styled.main(({ theme: { space, breakpoint } }) => ({
  paddingLeft: rem(20),
  paddingRight: rem(20),
  [mq(breakpoint.medium)]: {
    paddingTop: rem(space.xlarge),
    paddingLeft: rem(space.large),
    paddingRight: rem(space.large),
    paddingBottom: rem(space.large),
  },
}));
