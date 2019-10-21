import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors, typography } from '@heathmont/sportsbet-tokens';

/**
 * Dialog Typography
 *
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */

export const DialogHeading = styled.h1<any>({
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(24),
  lineHeight: 1.25,
  color: colors.text,
});

export const DialogText = styled.p<any>({
  fontSize: rem(16),
  lineHeight: 1.5,
  color: colors.palette.trunks[100],
});
