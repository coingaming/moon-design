import React, { useState } from 'react';

import { Container } from './private/Container';
import { CollapseTarget } from './private/CollapseTarget';
import { OuterContainer } from './private/OuterContainer';

type Props = {
  initialState?: boolean;
  collapseIcon: React.ReactNode;
  expandIcon: React.ReactNode;
  logo: React.ReactNode;
  openWidth?: number;
  collapseWidth?: number;
};

const Sidebar: React.FC<Props> = ({
  children,
  initialState = true,
  collapseIcon,
  expandIcon,
  logo,
  openWidth = 236,
  collapseWidth = 80,
}) => {
  const [isOpen, setIsOpen] = useState(initialState);
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
