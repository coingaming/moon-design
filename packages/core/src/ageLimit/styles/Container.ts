import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.div(({ theme }) => ({
  boxSizing: 'border-box',
  border: `2px ${theme.color.chiChi[100]} solid`,
  borderRadius: theme.newTokens.borderRadius.full,
  padding: theme.newTokens.space.xsmall,
  width: theme.newTokens.size.medium,
  height: theme.newTokens.size.medium,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

export default Container;
