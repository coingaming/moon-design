import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Bubble = styled.div(({ theme }) => ({
  display: 'inline-block',
  textAlign: 'right',
  color: theme.color.goten[100],
  background: theme.color.hit[100],
  fontSize: rem(12),
  lineHeight: rem(16),
  padding: rem(12),
  borderRadius: rem(4),
  position: 'relative',
  boxShadow: theme.boxShadow,

  '&::after': {
    content: '""',
    borderColor: 'transparent',
    borderTopColor: theme.color.hit[100],
    borderWidth: rem(8),
    borderBottomWidth: 0,
    borderStyle: 'solid',
    width: 0,
    height: 0,
    position: 'absolute',
    top: '100%',
    right: rem(12),
    marginTop: rem(-1),
  },
}));

export default Bubble;
