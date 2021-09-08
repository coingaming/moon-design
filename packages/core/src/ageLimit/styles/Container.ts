import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.div(({ theme }) => ({
  boxSizing: 'border-box',
  border: `2px ${theme.color.chiChi[100]} solid`,
  borderRadius: rem(theme.radius.largest),
  padding: rem(theme.space.small),
  width: rem(40),
  height: rem(40),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

export default Container;
