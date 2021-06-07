import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconClose from '../private/icons/IconClose';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

type Props = {
  backgroundColor?: ColorProps;
  borderRadius?: string | number;
  buttonClose?: boolean;
  className?: string;
  content?: React.ReactNode;
  glassBackground?: boolean;
  handleClose?: () => void;
  isOpen?: boolean;
  padding?: string | number;
  size?: 'small' | 'medium' | 'large';
};

const fadeOpen = keyframes`
  0% { opacity: 0; transform:scale(0.3); }
  100% { opacity: 1; transform:scale(1); }
`;

const Content = styled.div<Props>`
  animation: ${fadeOpen} 0.2s ease-in-out;
  background: ${({ backgroundColor, glassBackground, theme }) =>
    glassBackground
      ? 'rgba(255,255,255,0.4)'
      : backgroundColor
      ? themed('color', backgroundColor)(theme)
      : themed('color', 'gohan.100')(theme)};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? rem(borderRadius) : rem(theme.radius.default)};
  box-shadow: ${({ glassBackground }) =>
    glassBackground
      ? '0px -2px 8px rgba(102, 145, 247, 0.04), 0px 16px 24px rgba(102, 145, 246, 0.10)'
      : '0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 0px rgba(0, 0, 0, 0.4)'};
  max-width: ${({ size }) =>
    size == 'large' ? rem(1136) : size == 'medium' ? rem(752) : rem(580)};
  padding: ${({ padding }) => (padding ? rem(padding) : rem(16))};
  backdrop-filter: ${({ glassBackground }) =>
    glassBackground ? 'blur(10px)' : 'none'};
  position: absolute;
  transition: all 2s;

  width: 100%;
  z-index: 99;
`;

const ButtonClose = styled(IconClose)`
  position: absolute;
  top: ${rem(16)};
  right: ${rem(16)};
  cursor: pointer;
`;

const ModalContent: React.FC<Props> = ({
  backgroundColor,
  borderRadius,
  buttonClose,
  className,
  content,
  glassBackground,
  handleClose,
  isOpen,
  padding,
  size,
}) => {
  return (
    <Content
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      isOpen={isOpen}
      className={className}
      glassBackground={glassBackground}
      padding={padding}
      size={size}
    >
      {buttonClose && (
        <ButtonClose
          fontSize="0.750rem"
          color="bulma.100"
          onClick={handleClose}
        />
      )}
      {content}
    </Content>
  );
};

export default ModalContent;
