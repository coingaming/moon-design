import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const Playground = styled.div(
  ({
    theme: {
      border, color, radius, space,
    },
  }) => ({
    border,
    position: 'relative',
    padding: rem(space.default),
    borderRadius: rem(radius.small),
    borderColor: color.gohan[100],
    overflow: 'auto',
    resize: 'horizontal',
    width: '100%',
  }),
);
