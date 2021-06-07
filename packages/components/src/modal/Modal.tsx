import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';
import { ColorProps } from '@heathmont/moon-themes';

type Props = {
  backgroundColor?: ColorProps;
  borderRadius?: string | number;
  buttonClose?: boolean;
  content?: React.ReactNode;
  className?: string;
  clickOutsideClose?: boolean;
  disableOverlay?: boolean;
  glassBackground?: boolean;
  handleClose?: () => void;
  isOpen?: boolean;
  padding?: string | number;
  size?: 'small' | 'medium' | 'large';
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 9;
`;

const Modal: React.FC<Props> = ({
  backgroundColor,
  borderRadius,
  buttonClose,
  content,
  className,
  clickOutsideClose,
  disableOverlay,
  handleClose,
  glassBackground,
  isOpen,
  padding,
  size,
}) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleClose && handleClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <ModalOverlay
            clickOutsideClose={clickOutsideClose}
            disableOverlay={disableOverlay}
            glassBackground={glassBackground}
            handleClose={handleClose}
            isOpen={isOpen}
          />
          <ModalContent
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            buttonClose={buttonClose}
            className={className}
            content={content}
            handleClose={handleClose}
            glassBackground={glassBackground}
            isOpen={isOpen}
            padding={padding}
            size={size}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
