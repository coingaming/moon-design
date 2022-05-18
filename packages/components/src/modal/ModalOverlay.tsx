import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type Props = {
  clickOutsideClose?: boolean;
  disableOverlay?: boolean;
  glassBackground?: boolean;
  handleClose?: () => void;
  showUnmountAnimation?: boolean;
  children?: React.ReactNode;
};

const fadeOpen = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const fadeClose = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const StyledOverlay = styled.div<Props>`
  position: fixed;
  inset: 0;
  background: ${({ glassBackground }) =>
    glassBackground ? 'rgba(255,255,255,0)' : 'rgba(0, 0, 0, 0.4)'};
  opacity: 1;
  animation: ${({ showUnmountAnimation }) =>
    showUnmountAnimation
      ? css`
          ${fadeClose} 0.2s ease-in-out
        `
      : css`
          ${fadeOpen} 0.2s ease-in-out
        `};
  display: ${({ disableOverlay }) => (disableOverlay ? 'none' : 'block')};
`;

const ModalOverlay: React.FC<Props> = ({
  children,
  clickOutsideClose,
  disableOverlay,
  glassBackground,
  handleClose,
  showUnmountAnimation,
}) => {
  return (
    <StyledOverlay
      disableOverlay={disableOverlay}
      glassBackground={glassBackground}
      clickOutsideClose={clickOutsideClose}
      onClick={clickOutsideClose ? handleClose : undefined}
      showUnmountAnimation={showUnmountAnimation}
    >
      {children}
    </StyledOverlay>
  );
};

export default ModalOverlay;
