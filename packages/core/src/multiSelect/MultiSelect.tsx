import React, { useState } from 'react';
import Badge from '../badge/Badge';
import {
  ControlsClose,
  ControlsChevronUp,
  ControlsChevronDown,
} from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import { Inline, Stack } from '@heathmont/moon-components/lib';

import SearchWrapper from './private/styles/SearchWrapper';

import Label from './private/styles/Label';
import ListItem from './private/styles/ListItem';
import Menu from './private/styles/Menu';
import Container from './private/styles/Container';
import OuterContainer from './private/styles/OuterContainer';

interface Option {
  value: string;
  label?: string;
  element: ({
    isSelected,
  }: {
    isSelected: boolean;
  }) => JSX.Element | string;
}

interface MultiSelectProps {
  items: Option[];
  label: React.ReactNode;
  search?: React.ReactNode;
  footer?: React.ReactNode;
  initialSelectedItems: string[];
  isExpanded?: boolean;
  onChange?: (newSelectedItems: string[]) => any;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  label,
  search,
  footer,
  initialSelectedItems = [],
  isExpanded,
  onChange,
}) => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [isExpandedInner, setIsExpanded] = useState(isExpanded);

  const toggleExpanded = () => setIsExpanded(!isExpandedInner);

  const addSelectedItem = (selectedItem: string) => {
    const isAlreadySelected = selectedItems.find(
      (item) => item === selectedItem
    );
    if (isAlreadySelected) {
      return;
    }
    const newSelectedItems = [...selectedItems, selectedItem];
    if (typeof onChange === 'function') {
      onChange(newSelectedItems);
    }
    setSelectedItems(newSelectedItems);
  };

  const removeSelectedItem = (selectedItem: string) => {
    const newSelectedItems = selectedItems.filter(
      (item) => item !== selectedItem
    );
    if (typeof onChange === 'function') {
      onChange(newSelectedItems);
    }
    setSelectedItems(newSelectedItems);
  };

  const toggleSelectedItem = (selectedItem: string) => {
    const isAlreadySelected = !!selectedItems.find(
      (item) => item === selectedItem
    );
    if (isAlreadySelected) {
      removeSelectedItem(selectedItem);
    } else {
      addSelectedItem(selectedItem);
    }
  };

  const isSelectedItem = (currentItem: string) => {
    return !!selectedItems.find((item) => item === currentItem);
  };

  const isEmptySelectedItems = selectedItems && selectedItems.length === 0;
  return (
    <OuterContainer>
      <Container onClick={toggleExpanded} isExpandedInner={isExpandedInner}>
        <Stack space={isEmptySelectedItems ? 0 : rem(8)}>
          {label && (
            <Label variant={isEmptySelectedItems ? 'isEmpty' : 'default'}>
              {label}
            </Label>
          )}

          <Inline space={rem(4)}>
            {selectedItems.map((selectedItem, index) => (
              <Badge key={`selected-item-${index}`}>
                {selectedItem}
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

        {isExpandedInner ? (
          <ControlsChevronUp fontSize={rem(24)} aria-label={'Toggle menu'} />
        ) : (
          <ControlsChevronDown fontSize={rem(24)} aria-label={'Toggle menu'} />
        )}
      </Container>

      {isExpandedInner ? (
        <Menu>
          {search ? <SearchWrapper>{search}</SearchWrapper> : null}
          {/* {topContent && topContent} */}
          {items.map((item: any, index: number) => (
            <ListItem
              onClick={(e) => {
                e.preventDefault();
                toggleSelectedItem(item.value);
              }}
              key={`${item.value}-${index}`}
            >
              {typeof item.element === 'function'
                ? item.element({ isSelected: isSelectedItem(item.value) })
                : item.element}
            </ListItem>
          ))}
          {footer && footer}
        </Menu>
      ) : null}
    </OuterContainer>
  );
};

export default MultiSelect;
