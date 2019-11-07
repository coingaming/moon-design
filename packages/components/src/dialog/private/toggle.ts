import styled from 'styled-components';
import { hideVisually } from 'polished';
import { border, colors, opacity } from '@heathmont/sportsbet-tokens';
import { focus, spacing } from '@heathmont/sportsbet-utils';

export const DialogToggle = styled.button({
  position: 'absolute',
  top: spacing(),
  right: spacing(),
  padding: spacing('small'),
  verticalAlign: 'middle',
  fontSize: spacing('small'),
  lineHeight: 0,
  textDecoration: 'none',
  cursor: 'pointer',
  color: colors.neutral[20],
  borderRadius: border.radius.largest,
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: 'transparent',
  backgroundColor: colors.palette.gohan[100],
  ...focus(),
  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
    opacity: opacity.disabled,
  },
});

export const DialogToggleText = styled.span(hideVisually);
