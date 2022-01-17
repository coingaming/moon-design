import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: 'small' | 'medium';
};

const LabelContainer = styled.span<Props>(
  ({ theme: { fontWeight, radius } }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: fontWeight.semibold,
    textTransform: 'uppercase',
    borderRadius: rem(radius.largest),
    letterSpacing: rem(1),
    fontSize: rem(10),
    lineHeight: rem(16),
  }),
  ({ size }) => ({
    padding: size === 'small' ? `0 ${rem(8)}` : `${rem(2)} ${rem(8)}`,
  }),
  /* If a color or backgroundColor is set, override the modifier styles. */
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.colorNew.goten,
    backgroundColor: backgroundColor
      ? themed('color', backgroundColor)(theme)
      : theme.color.bulma[100],
  })
);

export default LabelContainer;
