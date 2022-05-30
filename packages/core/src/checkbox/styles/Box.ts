import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

const Box = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colorNew.trunks,
  borderRadius: theme.newTokens.borderRadius.interactive.xsmall,
  width: rem(24),
  height: rem(24),
  minWidth: rem(24),
  minHeight: rem(24),
  position: 'relative',
  transition: 'background-color 0.4s',
  zIndex: 2,
  '&:hover': {
    backgroundColor: rgba(theme.colorNew.bulma, 0.12),
  },
  '&::after': {
    content: '""',
    width: rem(16),
    height: rem(16),
    transition: theme.newTokens.transition.default,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `inset 0 0 0 ${rem(1)} ${theme.colorNew.trunks}`,
    borderRadius: theme.newTokens.borderRadius.interactive.xsmall,
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

export default Box;
