import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import IconToastClose from '../private/icons/IconToastClose';

const Wrapper = styled.button(({ theme }) => ({
  backgroundColor: theme.color.bulma[100],
  border: `1px solid ${theme.color.trunks[100]}`,
  borderRadius: theme.radius.largest,
  cursor: 'pointer',
  minWidth: rem(24),
  minHeight: rem(24),
  maxWidth: rem(24),
  maxHeight: rem(24),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ToastCloseButton: React.FC<any> = (props) => (
    <Wrapper {...props}>
      <IconToastClose fontSize="1rem" color="trunks.100" />
    </Wrapper>
);

export default ToastCloseButton;
