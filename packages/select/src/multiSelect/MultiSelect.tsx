import React, { useState } from 'react';
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

import Label from './private/styles/Label';
import ListItem from './private/styles/ListItem';
import Menu from './private/styles/Menu';
import Container from './private/styles/Container';

interface Option {
  value: string;
  label?: string;
  element: ({
    isSelected,
  }: {
    isSelected: boolean;
  }) => JSX.Element | JSX.Element | string;
}

interface MultiSelectProps {
  items: Option[];
  label: React.ReactNode;
  search?: React.ReactNode;
  footer?: React.ReactNode;
  initialSelectedItems?: Option[] | undefined;
  isExpanded?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  label,
  search,
  footer,
  initialSelectedItems,
  isExpanded,
}) => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [isExpandedInner, setIsExpanded] = useState(isExpanded);

  const toggleExpanded = () => setIsExpanded(!isExpandedInner);

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

  const isSelectedItem = (selectedItem: Option) => {
    const isSelectedItem = !!(selectedItems as Option[]).find(
      (item) => item.value === selectedItem.value
    );
    return isSelectedItem;
  };

  const isEmptySelectedItems = selectedItems && selectedItems.length === 0;
  return (
    <>
      <Container onClick={toggleExpanded}>
        <Stack space={isEmptySelectedItems ? 0 : rem(8)}>
          {label && (
            <Label variant={isEmptySelectedItems ? 'isEmpty' : 'default'}>
              {label}
            </Label>
          )}

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
                toggleSelectedItem(item);
              }}
              key={`${item.value}-${index}`}
            >
              {typeof item.element === 'function'
                ? item.element({ isSelected: isSelectedItem(item) })
                : item.element}
            </ListItem>
          ))}
          {footer && footer}
        </Menu>
      ) : null}
    </>
  );
};

export default MultiSelect;
