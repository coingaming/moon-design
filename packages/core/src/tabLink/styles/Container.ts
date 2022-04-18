import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';

type Props = {
  elementLeft?: React.ReactElement;
  size?: 'small' | 'medium';
  isTop?: boolean;
  paddingSize?: string;
};

const Container = styled.a<Props>(({ theme, size, isTop }) => [
  {
    display: 'flex',
    alignItems: 'center',
    padding: size === 'small' ? `${rem(4)} ${rem(8)}` : `${rem(8)} ${rem(12)}`,
    position: 'relative',
    margin: 0,
    fontSize: rem(14),
    lineHeight: rem(24),
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    color: theme.colorNew.bulma,
    transition: `color ${theme.newTokens.transition.default}`,
    textDecoration: 'none',
    border: 0,
    appearance: 'none',
    cursor: 'pointer',
    '&:after': {
      content: '""',
      position: 'absolute',
      height: rem(2),
      width: '100%',
      left: 0,
      right: 0,
      bottom: isTop ? 'auto' : 0,
      margin: '0 auto',
      backgroundColor: theme.colorNew.piccolo,
      opacity: 0,
      transition: `all ${theme.newTokens.transition.slow}`,
    }
  },
  isTop && {
    '&:after': {
      top: '0',
    },
  },
]);

export default Container;
