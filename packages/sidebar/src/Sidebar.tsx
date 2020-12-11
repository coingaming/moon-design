import React, { useEffect, useRef, useState } from 'react';

import { Container } from './private/Container';
import { CollapseTarget } from './private/CollapseTarget';
import { OuterContainer } from './private/OuterContainer';

type Props = {
  isOpen?: boolean;
  collapseIcon: React.ReactNode;
  expandIcon: React.ReactNode;
  logo: React.ReactNode;
  openWidth?: number;
  collapseWidth?: number;
  onToggle?: (_: boolean) => void;
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
  return (
    <OuterContainer
      isOpen={isOpen}
      openWidth={openWidth}
      collapseWidth={collapseWidth}
    >
      <CollapseTarget onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {isOpen ? collapseIcon : expandIcon}
      </CollapseTarget>
      {isOpen ? <Container>{children}</Container> : logo}
    </OuterContainer>
  );
};

export default Sidebar;
