import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import getCaptionSize from '../private/text/getCaptionSize';
import type { TextAlign } from '../text/Text';
import type { ColorProps } from '@heathmont/moon-themes';

export type CaptionSize = 9 | 10;

export type CaptionProps = {
  color?: ColorProps;
  textAlign?: TextAlign;
  size?: CaptionSize;
  isRegular?: boolean;
};

const Caption = styled.span<CaptionProps>(
  ({ color = 'bulma.100', isRegular, theme }) => ({
    color: themed('color', color)(theme),
    fontWeight: isRegular
      ? theme.newTokens.font.weight.normal
      : theme.newTokens.font.weight.semibold,
    textTransform: 'uppercase',
  }),
  ({ size = 10 }) => getCaptionSize(size),
  ({ textAlign }) => textAlign && { textAlign }
);

export default Caption;
