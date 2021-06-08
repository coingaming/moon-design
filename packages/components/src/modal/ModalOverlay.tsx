import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  clickOutsideClose?: boolean;
  disableOverlay?: boolean;
  glassBackground?: boolean;
  handleClose?: () => void;
};

const fadeOpen = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const StyledOverlay = styled.div<Props>`
  position: fixed;
  inset: 0;
  background: ${({ glassBackground }) =>
    glassBackground ? 'rgba(255,255,255,0)' : 'rgba(0, 0, 0, 0.4)'};
  opacity: 1;
  animation: ${fadeOpen} 0.3s ease-in-out;
  display: ${({ disableOverlay }) => (disableOverlay ? 'none' : 'block')};
`;

const ModalOverlay: React.FC<Props> = ({
  children,
  clickOutsideClose,
  disableOverlay,
  glassBackground,
  handleClose,
}) => {
  return (
    <StyledOverlay
      disableOverlay={disableOverlay}
      glassBackground={glassBackground}
      clickOutsideClose={clickOutsideClose}
      onClick={clickOutsideClose ? handleClose : undefined}
    >
      {children}
    </StyledOverlay>
  );
};

export default ModalOverlay;
