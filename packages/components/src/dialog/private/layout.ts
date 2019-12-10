import styled from 'styled-components';
import { rgba, rem } from 'polished';
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog';
import { mq } from '@heathmont/sportsbet-utils';

import { Inline } from '../../inline/inline';

import { DialogLongForm, DialogMaxWidth } from './types';

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
    overflow: 'hidden',
    backgroundColor: color.gohan[100] && rgba(color.gohan[100], 0.75),
    zIndex: zIndex.dialog,
  })
);

/**
 * 1. Arbitrary figure from design.
 */
export const DialogContent = styled(ReachDialogContent)<
  DialogMaxWidth & DialogLongForm
>(({ theme: { space } }) => [
  {
    margin: '0 auto',
    position: 'relative',
    maxWidth: rem(608) /* [1] */,
    padding: rem(space.default),
    outline: 'none',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  ({ longForm }) => longForm && { maxWidth: rem(752) } /* [1] */,
  ({ maxWidth }) => ({ maxWidth }),
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

export const DialogFooter = styled.footer(({ theme: { space } }) => ({
  padding: rem(space.default),
  textAlign: 'right',
  [`> ${Inline}`]: {
    justifyContent: 'flex-end',
  },
}));

/**
 * Calculates the maxHeight of content based on the dialog margin `vh` value.
 * A `rem` value provides a rough estimation of both header & footer height.
 *
 * e.g. if we want the dialog to appear with an outer margin of `10vh`, we use
 *      ...mainMaxHeight(10).
 */
const mainMaxHeight = (margin: number) => ({
  maxHeight: `calc(${100 - margin * 2}vh - ${rem(100)})`,
});

/**
 * 1. As bottom margins/paddings are ignored in `overflow: scroll;`, create the
 *    padding with a pseudo element.
 */
export const DialogMain = styled.main<DialogLongForm>(
  ({ theme: { breakpoint, space } }) => [
    {
      paddingTop: rem(space.xlarge),
      paddingLeft: rem(space.large),
      paddingRight: rem(space.large),
      overflow: 'auto',
      '&:last-child::after': {
        content: "''",
        height: rem(space.large),
        display: 'block',
      },
      ...mainMaxHeight(0),
      [mq(breakpoint.small)]: {
        ...mainMaxHeight(4),
      },
      [mq(breakpoint.medium)]: {
        ...mainMaxHeight(8),
      },
      [mq(breakpoint.xlarge)]: {
        ...mainMaxHeight(10),
      },
    },
    ({ longForm }) =>
      longForm && {
        paddingTop: rem(space.default * 3),
        [mq(breakpoint.medium)]: {
          paddingTop: rem(space.default * 5),
          paddingLeft: rem(space.default * 6),
          paddingRight: rem(space.default * 6),
        },
      },
  ]
);
