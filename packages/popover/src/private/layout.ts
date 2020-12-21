import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import rgba from 'polished/lib/color/rgba';

export const PopoverContainer = styled.div(
  ({ theme: { color, radius, space } }) => ({
    maxWidth: rem(600),
    minWidth: rem(300),
    padding: rem(24),
    background: color.gohan[100],
    outline: 'none',
    borderRadius: rem(radius.default),
    color: color.bulma[100],
    boxShadow: `0 0 ${rem(space.xlarge)} ${rgba(color.trunks[100], 0.3)}`,
  })
);
