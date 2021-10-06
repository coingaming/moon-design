import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.div<{ isExpandedInner: boolean }>(
  ({ theme, isExpandedInner }) => ({
    minHeight: rem(64),
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: isExpandedInner
      ? `${rem(1)} solid ${theme.color.piccolo[100]}`
      : `${rem(1)} solid ${theme.color.beerus[100]}`,
    '&:active': {
      border: `${rem(1)} solid ${theme.color.piccolo[100]}`,
    },
    borderRadius: rem(theme.radius.largest),
    padding: `${rem(10)} ${rem(16)}`,
    cursor: 'pointer',
  })
) as React.FC<any>;

export default Container;
