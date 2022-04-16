import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import getTextSize from '../private/text/getTextSize';
import type { ColorNames } from '@heathmont/moon-themes';

export type TextAlign =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'initial'
  | 'inherit';

export type TextSize =
  | 9
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 32
  | 48
  | 56
  | 64
  | 72;

export type TextProps = {
  size?: TextSize;
  color?: ColorNames;
  isBold?: boolean;
  isUppercase?: boolean;
  isUnderline?: boolean;
  textAlign?: TextAlign;
  lineHeight?: number;
};

const Text = styled.p<TextProps>(
  ({ color = 'bulma.100', theme }) => ({
    color: themed('color', color)(theme),
  }),
  ({ size = 16 }) => getTextSize(size),
  ({ textAlign }) =>
    textAlign && {
      textAlign,
    },
  ({ isBold, theme: { newTokens } }) =>
    isBold && {
      fontWeight: newTokens.font.weight.semibold,
    },
  ({ isUppercase }) =>
    isUppercase && {
      textTransform: 'uppercase',
    },
  ({ isUnderline }) =>
    isUnderline && {
      textDecoration: 'underline',
    },
  ({ lineHeight }) =>
    lineHeight && {
      lineHeight: rem(lineHeight),
    }
);

export default Text;
