import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors, typography } from '@heathmont/sportsbet-tokens';

export const DialogHeading = styled.h1({
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(24),
  lineHeight: 1.25,
  color: colors.text,
});

export const DialogText = styled.p({
  fontSize: rem(16),
  lineHeight: 1.5,
  color: colors.palette.trunks[100],
});
