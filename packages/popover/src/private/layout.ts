import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import rgba from 'polished/lib/color/rgba';
import { ColorNames } from '@heathmont/moon-themes';

interface PopoverContainerProps {
  padding?: number;
  backgroundColor?: ColorNames;
}

export const PopoverContainer = styled.div<PopoverContainerProps>(
  ({ theme: { color, radius, boxShadow }, padding, backgroundColor, theme }) => ({
    maxWidth: rem(600),
    minWidth: rem(300),
    padding: `${padding !== undefined ? rem(padding) : rem(24)}`,
    background: `${
      backgroundColor !== undefined
        ? themed('color', backgroundColor)(theme)
        : themed('color', 'goku.100')(theme)
    }`,
    outline: 'none',
    borderRadius: rem(radius.default),
    color: color.bulma[100],
    boxShadow: boxShadow,
  })
);
