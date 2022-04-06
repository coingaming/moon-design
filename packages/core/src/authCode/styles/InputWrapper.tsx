import {rem} from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  isXLarge?: boolean;
}

const InputWrapper = styled.div<Props>(
  ({ isXLarge, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: isXLarge ? rem(56) : rem(46),
    height: isXLarge ? rem(66) : rem(56),
    marginRight: rem(8),
    '&:last-child': {
      marginRight: 0,
    },
    '& > div[disabled]': {
      opacity: 1,
      '& input': {
        cursor: 'not-allowed'
      }
    },
    '& input': {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      fontSize: rem(24),
      lineHeight: rem(32),
      color: theme.colorNew.bulma
    }
  })
);

export default InputWrapper;
