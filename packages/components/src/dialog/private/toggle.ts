import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { focus, rem } from '@heathmont/moon-utils';

type DialogToggleProps = {
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
    backgroundColor: color.gohan[100],
    ...focus(color.piccolo[100]),
    '&:disabled, &[disabled]': {
      cursor: 'not-allowed',
      opacity: opacity.disabled,
    },
  })
);

export const DialogToggleText = styled.span(hideVisually);
