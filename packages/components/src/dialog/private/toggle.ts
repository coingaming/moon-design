import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { focus, rem, themed } from '@heathmont/moon-utils';

type DialogToggleProps = {
  backgroundColor?: ColorProps;
  heading?: boolean;
};
export const DialogToggle = styled.button<DialogToggleProps>(
  ({ theme: { border, color, opacity, radius, space }, heading }) => ({
    position: heading ? 'relative' : 'absolute',
    top: !heading && rem(space.default),
    right: !heading && rem(space.default),
    padding: rem(space.small),
    verticalAlign: 'middle',
    fontSize: rem(space.small),
    lineHeight: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    color: color.trunks[100],
    borderRadius: rem(radius.largest),
    border,
    borderColor: 'transparent',
    ...focus(color.piccolo[100]),
    '&:disabled, &[disabled]': {
      cursor: 'not-allowed',
      opacity: opacity.disabled,
    },
  }),
  ({ backgroundColor, theme }) => ({
    backgroundColor: themed('color', backgroundColor)(theme) || theme.color.gohan[100],
  }),
);

export const DialogToggleText = styled.span(hideVisually);
