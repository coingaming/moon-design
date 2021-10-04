import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.div(({ theme }) => ({
    minHeight: rem(64),
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `${rem(1)} solid ${theme.color.trunks[100]}`,
    '&:focus': {
      background: 'none',
      border: `${rem(1)} solid ${theme.color.piccolo[100]}`,
    },
    borderRadius: rem(theme.radius.default),
    padding: `${rem(10)} ${rem(16)}`,
    cursor: 'pointer',
  }));


export default Container;