import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IconChevronDownRounded } from '@heathmont/moon-assets';
import { FilterDropdown, Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import { useClickAway, useKey } from 'react-use';

const Title = styled(Text)(
  ({ theme }) => `
  color: ${theme.color.trunks[100]};
`
);

const Toggle = styled.button<{ isOpen: boolean }>(
  ({ isOpen, theme }) => `
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: ${rem(8)};
  font-size: ${rem(12)};
  align-items: center;
  color: ${isOpen ? theme.color.piccolo[100] : theme.color.trunks[100]};
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`
);

const Container = styled.div<{ isActive: boolean }>(
  ({ isActive, theme }) => `
  display: inline-block;
  position: relative;

  ${
    isActive
      ? `
      ${Title} {
        color: ${theme.color.goten[100]};
      }
      ${Toggle} {
        color: ${theme.color.goten[100]};
      }
    `
      : ''
  }
`
);

const DropdownWrapper = styled.div(
  ({ theme }) => `
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: ${rem(8)};
  color: ${theme.color.bulma[100]};
  z-index: ${theme.zIndex.toggle};
`
);

type Props = {
  forceOpen?: boolean;
  title: string;
  isActive?: boolean;
};

const Filter: React.FC<Props> = ({
  forceOpen = false,
  isActive = false,
  title,
  children,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(forceOpen);
  useClickAway(ref, () => setIsOpen(false));
  useKey('Escape', () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [setIsOpen, forceOpen]);

  return (
    <Container ref={ref} isActive={isActive}>
      <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Title size={14}>{title}</Title>
        <IconChevronDownRounded />
      </Toggle>
      {isOpen && (
        <DropdownWrapper>
          <FilterDropdown>{children}</FilterDropdown>
        </DropdownWrapper>
      )}
    </Container>
  );
};

export default Filter;
