import React from 'react';
import {rem, themed} from "@heathmont/moon-utils";
import styled from "styled-components";

const Wrapper = styled.div({
  position: 'relative',
  cursor: 'pointer',
});

const Content = styled.div<{ position: 'top' | 'bottom' | 'left' | 'right' }>({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, calc(-100% - 5px))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  padding: `${rem(2)} ${rem(6)}`,
  borderRadius: `${rem(4)}`,
  backgroundColor: 'red',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 100%)',
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid #f00'
  }
});

const Tooltip:React.FC<{
  content: React.ReactElement,
  children: React.ReactElement,
  position?: 'top' | 'bottom' | 'left' | 'right'
}> = ({ content, position = 'top', children }) => {
  return (<Wrapper>
    {children}
    <Content position={position}>{content}</Content>
  </Wrapper>);
};

export default Tooltip;
