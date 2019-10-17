import styled from '@emotion/styled';
import { rgba, rem } from 'polished';
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog';
import {
  border,
  breakpoints,
  colors,
  spacing as spacingTokens,
  zIndex,
} from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';

import { DialogLongForm, DialogMaxWidth } from './types';

/* Styled Reach UI Dialog Components
  =========================================== */

/**
 * For further info, see the Reach UI documentation:
 * https://ui.reach.tech/dialog/
 */

export const DialogOverlay = styled(ReachDialogOverlay)({
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  overflow: 'hidden',
  backgroundColor: rgba(colors.palette.hit[100], 0.75),
  zIndex: zIndex.dialog,
});

/**
 * 1. Arbitrary figure from design.
 */
export const DialogContent = styled(ReachDialogContent)<
  DialogMaxWidth & DialogLongForm
>([
  {
    margin: '0 auto',
    position: 'relative',
    maxWidth: rem(608) /* [1] */,
    padding: spacing('default'),
    outline: 'none',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  ({ longForm }) => longForm && { maxWidth: rem(752) } /* [1] */,
  ({ maxWidth }) => ({ maxWidth }),
]);

/* Layout
  =========================================== */

export const DialogContainer = styled.div({
  position: 'relative',
  outline: 'none',
  borderRadius: border.radius.small,
  color: colors.text,
  background: colors.background,
  boxShadow: `0 ${spacing()} ${spacing('large')} rgba(0, 0, 0, 0.5)`,
});

export const DialogFooter = styled.footer({
  padding: spacing(),
  textAlign: 'right',
});

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
export const DialogMain = styled.main<DialogLongForm>([
  {
    paddingTop: spacing('xlarge'),
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
    overflow: 'auto',
    '&:last-child::after': {
      content: "''",
      height: spacing('large'),
      display: 'block',
    },
    ...mainMaxHeight(0),
    [mq(breakpoints.small)]: {
      ...mainMaxHeight(4),
    },
    [mq(breakpoints.medium)]: {
      ...mainMaxHeight(8),
    },
    [mq(breakpoints.xlarge)]: {
      ...mainMaxHeight(10),
    },
  },
  ({ longForm }) =>
    longForm && {
      paddingTop: rem(spacingTokens.default * 3),
      [mq(breakpoints.medium)]: {
        paddingTop: rem(spacingTokens.default * 5),
        paddingLeft: rem(spacingTokens.default * 6),
        paddingRight: rem(spacingTokens.default * 6),
      },
    },
]);
