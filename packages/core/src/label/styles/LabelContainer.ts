import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: 'twoxsmall' | 'xsmall';
  textTransform?:  "capitalize" | "lowercase" | "uppercase";
};

const LabelContainer = styled.span<Props>(
  ({ theme: { newTokens } }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: newTokens.font.weight.semibold,
    borderRadius: newTokens.borderRadius.full,
    letterSpacing: rem(1),
    fontSize: rem(10),
    lineHeight: rem(16),
  }),
  ({ size }) => ({
    padding: size === 'twoxsmall' ? `0 ${rem(8)}` : `${rem(4)} ${rem(8)}`,
  }),
  ({textTransform}) => ({
    textTransform: textTransform ? textTransform : 'uppercase',
  }),
  /* If a color or backgroundColor is set, override the modifier styles. */
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.colorNew.goten,
    backgroundColor: backgroundColor
      ? themed('color', backgroundColor)(theme)
      : theme.colorNew.bulma,
  })
);

export default LabelContainer;
