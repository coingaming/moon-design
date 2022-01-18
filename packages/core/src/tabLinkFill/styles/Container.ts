import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

type Props = {
  elementLeft?: React.ReactElement;
  size?: 'small' | 'medium';
};

const Container = styled.a<Props>(({ theme, size }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: `${size === 'small' ? rem(4) : rem(8)} ${rem(8)}`,
  position: 'relative',
  margin: 0,
  fontSize: rem(14),
  lineHeight: rem(24),
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  color: theme.color.bulma[100],
  transitionProperty: 'color, background-color',
  transitionDuration: `${theme.transitionDuration.default}s`,
  transitionTimingFunction: 'ease',
  textDecoration: 'none',
  appearance: 'none',
  borderRadius: rem(8),
  '&:hover, &:focus': {
    backgroundColor: rgba(theme.color.piccolo[100], 0.1),
    cursor: 'pointer',
  },
  '&:active, &.active, &[aria-current=page]': {
    backgroundColor: theme.color.piccolo[100],
    color: theme.colorNew.goten,
  },
}));

export default Container;
