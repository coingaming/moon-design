import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import getTextSize from '../private/text/getTextSize';
import type { TextAlign } from '../text/Text';
import type { ColorNames } from '@heathmont/moon-themes';

export type HeadingSize = 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72;

export type HeadingProps = {
  size?: HeadingSize;
  color?: ColorNames;
  isRegular?: boolean;
  isUppercase?: boolean;
  isUnderline?: boolean;
  textAlign?: TextAlign;
  lineHeight?: number;
};

const Heading = styled.h3<HeadingProps>(
  ({ color = 'bulma.100', theme }) => ({
    color: themed('color', color)(theme),
  }),
  ({ size = 16 }) => getTextSize(size),
  ({ textAlign }) => textAlign && { textAlign },
  ({ isRegular, theme }) => ({
    fontWeight: isRegular
      ? theme.newTokens.font.weight.normal
      : theme.newTokens.font.weight.semibold,
  }),
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

export default Heading;
