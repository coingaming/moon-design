import styled from 'styled-components';
import margin from 'polished/lib/shorthands/margin';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

export const Divider = styled.hr({
  ...margin(spacing(), null),
  display: 'block',
  borderStyle: border.style,
  borderWidth: `${border.width}px 0 0 0`,
  borderColor: colors.neutral[70],
});
