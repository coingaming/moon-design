import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import { mq } from '@heathmont/moon-utils';

/* Layout
  =========================================== */

export const DialogContainer = styled.div<{ variant?: 'default' | 'new' }>(
  ({ theme: { color, radius, space }, variant }) => ({
    position: 'relative',
    outline: 'none',
    borderRadius: variant === 'new' ? rem(16) : rem(radius.small),
    color: color.bulma[100],
    background: variant === 'new' ? color.gohan[100] : color.goku[100],
    boxShadow: `0 ${rem(space.default)} ${rem(space.large)} rgba(0, 0, 0, 0.5)`,
  })
);

/**
 * 1. As bottom margins/paddings are ignored in `overflow: scroll;`, create the
 *    padding with a pseudo element.
 */
export const DialogMain = styled.main<{ variant?: 'default' | 'new' }>(
  ({ theme: { space, breakpoint }, variant }) => ({
    padding: variant === 'new' ? 0 : rem(20),
    [mq(breakpoint.medium)]: {
      paddingTop: variant === 'new' ? 0 : rem(space.xlarge),
      paddingLeft: variant === 'new' ? 0 : rem(space.large),
      paddingRight: variant === 'new' ? 0 : rem(space.large),
      paddingBottom: variant === 'new' ? 0 : rem(space.large),
    },
  })
);
