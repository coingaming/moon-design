import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import setFontSize from '../utils/setFontSize';
import setLetterSpacing from '../utils/setLetterSpacing';
import setPadding from '../utils/setPadding';
import type LabelProps from '../private/types/LabelProps';

const LabelContainer = styled.span<LabelProps>(
  ({ theme: { newTokens } }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: newTokens.borderRadius.interactive.xsmall,
    lineHeight: rem(16),
  }),
  ({ size, iconLeft, iconRight }) => ({
    padding: setPadding({ size, iconRight, iconLeft }),
  }),
  ({ isUppercase, size, theme: { newTokens } }) => ({
    textTransform: isUppercase ? 'uppercase' : 'none',
    fontWeight: isUppercase && newTokens.font.weight.semibold,
    letterSpacing: setLetterSpacing({ isUppercase, size }),
    fontSize: setFontSize({ isUppercase, size }),
  }),
  /* If a color or backgroundColor is set, override the modifier styles. */
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.colorNew.gohan,
    backgroundColor: backgroundColor
      ? themed('color', backgroundColor)(theme)
      : theme.colorNew.bulma,
  })
);

export default LabelContainer;
