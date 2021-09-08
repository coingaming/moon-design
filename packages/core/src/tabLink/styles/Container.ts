import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';

type Props = {
  elementLeft?: React.ReactElement;
  size?: 'small' | 'medium';
  isTop?: boolean;
  paddingSize?: string;
};

const Container = styled.a<Props>(({ theme, paddingSize, isTop }) => [
  {
    display: 'flex',
    alignItems: 'center',
    padding: rem(8),
    paddingTop: isTop ? paddingSize : 0,
    paddingBottom: isTop ? 0 : paddingSize,
    position: 'relative',
    margin: 0,
    fontSize: rem(14),
    lineHeight: rem(24),
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    color: theme.color.bulma[100],
    transition: `color ${theme.transitionDuration.default}s ease`,
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
      backgroundColor: theme.color.piccolo[100],
      transform: 'scaleX(0)',
      transition: `transform ${theme.transitionDuration.default}s ease`,
    },
    '&:hover, &:focus, &:active, &.active, &[aria-current=page]': {
      color: theme.color.piccolo[100],
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
