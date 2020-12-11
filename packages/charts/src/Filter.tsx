import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IconChevronDownRounded } from '@heathmont/moon-assets';
import { FilterDropdown, Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import { useClickAway, useKey } from 'react-use';

const Title = styled(Text)(({ theme }) => ({
  color: theme.color.trunks[100],
}));

const Toggle = styled.button<{ isOpen: boolean }>(({ isOpen, theme }) => ({
  display: 'flex',
  fontSize: rem(12),
  alignItems: 'center',
  color: isOpen ? theme.color.piccolo[100] : theme.color.trunks[100],
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
  color: theme.color.bulma[100],
  zIndex: theme.zIndex.toggle,
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
