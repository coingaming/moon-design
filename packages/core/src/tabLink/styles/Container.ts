import {lighten, rgba} from "polished";
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
      transform: 'scaleX(0)',
      transition: `transform ${theme.newTokens.transition.default}`,
    },
    '&:hover:not(:focus):not(:active):not(.active)': {
      backgroundColor: rgba(theme.colorNew.piccolo, .12),
      borderRadius: rem(8),
      color: theme.colorNew.piccolo,
    },
    '&:focus, &:active, &.active, &[aria-current=page]': {
      color: theme.colorNew.piccolo,
      cursor: 'pointer',
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
  },
  isTop && {
    '&:after': {
      top: '0',
    },
  },
]);

export default Container;
