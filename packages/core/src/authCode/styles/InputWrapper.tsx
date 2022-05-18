import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const InputWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  width: rem(46),
  height: rem(56),
  marginRight: rem(8),
  '&:last-child': {
    marginRight: 0,
  },
  '& > div[disabled]': {
    opacity: 1,
    '& input': {
      cursor: 'not-allowed',
    },
  },
  '& input': {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: rem(24),
    lineHeight: rem(32),
    color: theme.colorNew.bulma,
  },
}));

export default InputWrapper;
