import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  elementLeft?: React.ReactElement;
  size?: 'small' | 'medium' | 'large';
};

const Container = styled.a<Props>(({ theme, size }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: size === 'small'
    ? `${rem(4)} ${rem(8)}`
    : `${rem(8)} ${rem(12)}`,
  position: 'relative',
  margin: 0,
  fontSize: rem(14),
  lineHeight: rem(24),
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  color: theme.colorNew.bulma,
  transition: `all ${theme.newTokens.transition.default}s`,
  textDecoration: 'none',
  appearance: 'none',
  borderRadius: rem(8),
  cursor: 'pointer',
}));

export default Container;
