import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';

/**
 * Component
 */
const Toggle = styled.button({
  position: 'absolute',
  top: spacing(),
  right: spacing(),
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  border: 'none',
  fontSize: '1rem',
});

export { Toggle };
