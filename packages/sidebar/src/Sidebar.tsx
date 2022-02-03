import React, { useEffect, useRef, useState } from 'react';
import { CollapseTarget } from './private/CollapseTarget';
import { Container } from './private/Container';
import { OuterContainer } from './private/OuterContainer';

type Props = {
  isOpen?: boolean;
  collapseIcon: React.ReactNode;
  expandIcon: React.ReactNode;
  logo: React.ReactNode;
  openWidth?: number;
  collapseWidth?: number;
  onToggle?: (_: boolean) => void;
  onStateChange?: (state: boolean) => void;
};

const Sidebar: React.FC<Props> = ({
  children,
  isOpen: initialState = true,
  collapseIcon,
  expandIcon,
  logo,
  openWidth = 236,
  collapseWidth = 80,
  onToggle,
  onStateChange,
}) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const initialRender = useRef(true);
  useEffect(() => {
    if (!onToggle) {
      return;
    }
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  const handleStateChange = (state: boolean) => {
    setIsOpen(state);
    if (onStateChange) onStateChange(state);
  };

  return (
    <OuterContainer
      isOpen={isOpen}
      openWidth={openWidth}
      collapseWidth={collapseWidth}
    >
      <CollapseTarget
        onClick={() => handleStateChange(!isOpen)}
        isOpen={isOpen}
      >
        {isOpen ? collapseIcon : expandIcon}
      </CollapseTarget>
      {isOpen ? <Container>{children}</Container> : logo}
    </OuterContainer>
  );
};

export default Sidebar;
