import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import rgba from 'polished/lib/color/rgba';

interface PopoverContainerProps {
  padding?: number;
}

export const PopoverContainer = styled.div<PopoverContainerProps>(
  ({ theme: { color, radius, space }, padding }) => ({
    maxWidth: rem(600),
    minWidth: rem(300),
    padding: `${padding !== undefined ? rem(padding) : rem(24)}`,
    background: color.goku[100],
    outline: 'none',
    borderRadius: rem(radius.default),
    color: color.bulma[100],
    boxShadow: `0 0 ${rem(space.xlarge)} ${rgba(color.trunks[100], 0.3)}`,
  })
);
