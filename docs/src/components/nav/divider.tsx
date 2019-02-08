import styled from '@emotion/styled';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

export const Divider = styled.hr({
  display: 'block',
  marginBottom: spacing(),
  marginTop: spacing(),
  borderStyle: border.style,
  borderWidth: `${border.width}px 0 0 0`,
  borderColor: colors.neutral[70],
});
