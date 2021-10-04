import React, { useState } from 'react';
import styled from 'styled-components';
import { useCombobox, useMultipleSelection } from 'downshift';
import { Badge } from '@heathmont/moon-core';
import {
  ControlsClose,
  ControlsChevronUp,
  ControlsChevronDown,
} from '@heathmont/moon-icons';
import { Inline } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import { Stack } from '@heathmont/moon-components';

import SearchWrapper from '../private/styles/SearchWrapper';

const Label = styled.label(({ theme }) => ({
  fontSize: rem(12),
  lineHeight: 1.5,
  color: theme.color.trunks[100],
}));

const Container = styled.div(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `${rem(1)} solid ${theme.color.trunks[100]}`,
  '&:focus': {
    background: 'none',
    border: `${rem(1)} solid ${theme.color.piccolo[100]}`,
  },
  borderRadius: rem(theme.radius.default),
  padding: `${rem(10)} ${rem(16)}`,
  cursor: 'pointer',
}));

const Menu = styled.ul(({ theme }) => ({
  width: '100%',
  overflowY: 'auto',
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  listStyle: 'none',
  padding: 0,
  left: 0,
  borderRadius: rem(theme.radius.default),
}));

type Option = {
  value: string;
  label?: string;
  element: JSX.Element | string;
};

interface MultiSelectProps {
  items: Option[];
  label: React.ReactNode;
  search?: React.ReactNode;
  footer?: React.ReactNode;
  initialSelectedItems?: Option[] | undefined;
  initialIsExpanded?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  label,
  search,
  footer,
  initialSelectedItems,
  initialIsExpanded,
}) => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [isExpanded, setIsExpanded] = useState(initialIsExpanded);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const addSelectedItem = (selectedItem: Option) => {
    const isAlreadySelected = (selectedItems as Option[]).find(
      (item) => item.value === selectedItem.value
    );
    if (isAlreadySelected) {
      return;
    }
    setSelectedItems([...(selectedItems as Option[]), selectedItem]);
  };

  const removeSelectedItem = (selectedItem: Option) => {
    setSelectedItems(
      (selectedItems as Option[]).filter(
        (item) => item.value !== selectedItem.value
      )
    );
  };

  const toggleSelectedItem = (selectedItem: Option) => {
    const isAlreadySelected = !!(selectedItems as Option[]).find(
      (item) => item.value === selectedItem.value
    );
    if (isAlreadySelected) {
      removeSelectedItem(selectedItem);
    } else {
      addSelectedItem(selectedItem);
    }
  };

  return (
    <>
      <Container onClick={toggleExpanded}>
        <Stack space={rem(8)}>
          {label && <Label>{label}</Label>}
          <Inline space={rem(4)}>
            {(selectedItems as Option[]).map((selectedItem, index) => (
              <Badge key={`selected-item-${index}`}>
                {selectedItem.value}
                <ControlsClose
                  fontSize="1rem"
                  style={{ cursor: 'pointer' }}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    removeSelectedItem(selectedItem);
                  }}
                />
              </Badge>
            ))}
          </Inline>
        </Stack>

        {isExpanded ? (
          <ControlsChevronUp fontSize={rem(24)} aria-label={'Toggle menu'} />
        ) : (
          <ControlsChevronDown fontSize={rem(24)} aria-label={'Toggle menu'} />
        )}
      </Container>

      {isExpanded && (
        <Menu>
          {search ? <SearchWrapper>{search}</SearchWrapper> : null}
          {/* {topContent && topContent} */}
          {items.map((item: any, index: number) => (
            <li
              onClick={(e) => {
                e.preventDefault();
                toggleSelectedItem(item);
              }}
              key={`${item.value}-${index}`}
            >
              {item.element}
            </li>
          ))}
          {footer && footer}
        </Menu>
      )}
    </>
  );
};

export default MultiSelect;
