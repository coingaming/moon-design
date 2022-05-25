import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.div(({ theme }) => ({
  boxSizing: 'border-box',
  border: `2px ${theme.colorNew.chiChi} solid`,
  borderRadius: rem(9999),
  padding: rem(8),
  width: rem(40),
  height: rem(40),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

export default Container;
