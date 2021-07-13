import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
  showAnimation: boolean;
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
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
  const [showUnmountAnimation, setShowUnmountAnimation] = useState(false);

  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeAnimation();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  const closeAnimation = () => {
    setShowUnmountAnimation(true);
    setTimeout(() => {
      setShowUnmountAnimation(false);
      handleClose && handleClose();
    }, 200);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <ModalWrapper className={className}>
          <ModalOverlay
            clickOutsideClose={clickOutsideClose}
            disableOverlay={disableOverlay}
            glassBackground={glassBackground}
            handleClose={closeAnimation}
            showUnmountAnimation={showUnmountAnimation}
          />
          <ModalContent
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            buttonClose={buttonClose}
            content={content}
            handleClose={closeAnimation}
            glassBackground={glassBackground}
            padding={padding}
            size={size}
            showUnmountAnimation={showUnmountAnimation}
          />
        </ModalWrapper>,
        document.body
      )}
    </>
  );
};

export default Modal;
