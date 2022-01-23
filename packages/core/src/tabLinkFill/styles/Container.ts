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
  color: theme.colorNew.bulma,
  transitionProperty: 'color, background-color',
  transitionDuration: theme.transitionDuration.default,
  textDecoration: 'none',
  appearance: 'none',
  borderRadius: rem(8),
  '&:hover, &:focus': {
    backgroundColor: rgba(theme.colorNew.piccolo, 0.1),
    cursor: 'pointer',
  },
  '&:active, &.active, &[aria-current=page]': {
    backgroundColor: theme.colorNew.piccolo,
    color: theme.colorNew.goten,
  },
}));

export default Container;
