import styled, { CSSObject } from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';

type ToggleProps = {
  topRight?: boolean;
};

const topRightStyle: CSSObject = {
  position: 'absolute',
  top: spacing(),
  right: spacing(),
};

const Toggle = styled.button<ToggleProps>(({ topRight = true }) => {
  return {
    background: 'none',
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    fontSize: '1rem',
    ...(topRight ? topRightStyle : {}),
  };
});

export { Toggle };
