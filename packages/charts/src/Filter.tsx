import React, { useState, useRef, useEffect } from 'react';
import { IconChevronDownRounded } from '@heathmont/moon-assets';
import { FilterDropdown } from '@heathmont/moon-components';
import { Text } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';
import { useClickAway, useKey } from 'react-use';
import styled from 'styled-components';

const Title = styled(Text)(({ theme }) => ({
  color: theme.colorNew.trunks,
}));

const Toggle = styled.button<{ isOpen: boolean }>(({ isOpen, theme }) => ({
  display: 'flex',
  fontSize: rem(12),
  alignItems: 'center',
  color: isOpen ? theme.colorNew.piccolo : theme.colorNew.trunks,
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  [Title]: {
    marginRight: rem(8),
  },
}));

const Container = styled.div({
  display: 'inline-block',
  position: 'relative',
});

const DropdownWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  paddingTop: rem(8),
  color: theme.colorNew.bulma,
  zIndex: theme.newTokens.zIndex.toggle,
}));

type ChildrenProps = {
  setIsOpen: (isOpen: boolean) => void;
};

type Props = {
  forceOpen?: boolean;
  title: string;
  children: (props: ChildrenProps) => React.ReactNode;
};

const Filter: React.FC<Props> = ({ forceOpen = false, title, children }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(forceOpen);
  useClickAway(ref, () => setIsOpen(false));
  useKey('Escape', () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [setIsOpen, forceOpen]);

  return (
    <Container ref={ref}>
      <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Title size={14}>{title}</Title>
        <IconChevronDownRounded />
      </Toggle>
      {isOpen && (
        <DropdownWrapper>
          <FilterDropdown>{children({ setIsOpen })}</FilterDropdown>
        </DropdownWrapper>
      )}
    </Container>
  );
};

export default Filter;
