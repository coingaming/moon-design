import styled from 'styled-components';

type Props = {
  isHover: boolean;
};

const Hover = styled.div<Props>(({ theme, isHover }) => [
  {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    transition: `background-color ${theme.newTokens.transition.default}`,
  },
  isHover && {
    backgroundColor: theme.hover.primary,
  },
]);

export default Hover;
