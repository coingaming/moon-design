import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import { mq } from '@heathmont/moon-utils';

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
  }),
);

/**
 * 1. As bottom margins/paddings are ignored in `overflow: scroll;`, create the
 *    padding with a pseudo element.
 */
export const DialogMain = styled.main(({ theme: { space, breakpoint } }) => ({
  padding: rem(20),
  [mq(breakpoint.medium)]: {
    paddingTop: rem(space.xlarge),
    paddingLeft: rem(space.large),
    paddingRight: rem(space.large),
    paddingBottom: rem(space.large),
  },
}));
