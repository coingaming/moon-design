import styled from 'styled-components';
import margin from 'polished/lib/shorthands/margin';
import { rem } from '@heathmont/moon-utils';

export const Divider = styled.hr(
  ({ theme: { borderStyle, borderWidth, color, space } }) => ({
    ...margin(rem(space.default), null),
    display: 'block',
    borderStyle,
    borderWidth: `${borderWidth}px 0 0 0`,
    borderColor: color.beerus[100],
  })
);
