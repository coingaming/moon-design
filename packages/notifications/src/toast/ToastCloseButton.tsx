import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import IconToastClose from '../icons/IconToastClose';

const Wrapper = styled.button(({ theme }) => ({
  backgroundColor: theme.colorNew.bulma,
  border: `1px solid ${theme.colorNew.trunks}`,
  borderRadius: rem(theme.radius.largest),
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
