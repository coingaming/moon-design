import React, { useState } from 'react';
import styled from 'styled-components';
import { useCombobox, useMultipleSelection } from 'downshift';
import { Badge } from '@heathmont/moon-core';
import { ControlsClose, ControlsChevronUp } from '@heathmont/moon-icons';
import { Inline } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';

const menuMultipleStyles = {
  maxHeight: '180px',
  overflowY: 'auto',
  width: '250px',
  margin: 0,
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  zIndex: 1000,
  listStyle: 'none',
  padding: 0,
  left: '340px',
};

const selectedItemIconStyles = { cursor: 'pointer' };

const comboboxStyles = { display: 'inline-block', marginLeft: '5px' };

const Label = styled.label(({ theme }) => ({
  fontSize: rem(12),
  lineHeight: 1.5,
  color: theme.color.trunks[100],
}));

const Wrapper = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
  border: `${rem(1)} solid ${theme.color.trunks[100]}`,
  '&:focus': {
    background: 'none',
    border: `${rem(2)} solid ${theme.color.piccolo[100]}`,
  },
  borderRadius: rem(theme.radius.small),
  padding: `${rem(10)} ${rem(16)}`,
}));

const Menu = styled.div(({ theme }) => ({
  position: 'absolute',
  bottom: -1,
}));

interface MultiSelectProps {
  items: any[];
  label: React.ReactNode;
}
type ItemValue =
  | string
  | boolean
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | null
  | undefined;

const MultiSelect: React.FC<MultiSelectProps> = ({ items, label }) => {
  const [inputValue, setInputValue] = useState<any>('');

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems: [items[0]],
  });
  const getFilteredItems = (items: any[]) =>
    items.filter(
      (item: any) =>
        selectedItems.indexOf(item) < 0 &&
        item.value.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem as any);
            selectItem(null);
          }
          break;

        default:
          break;
      }
    },
  });
  return (
    <Wrapper>
      {label && <Label {...getLabelProps()}>{label}</Label>}
      <Inline space={rem(4)}>
        {selectedItems.map((selectedItem, index) => (
          <Badge
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
          >
            {selectedItem.value}
            <ControlsClose
              fontSize="1rem"
              style={selectedItemIconStyles}
              onClick={() => removeSelectedItem(selectedItem)}
            />
          </Badge>
        ))}
      </Inline>

      <ControlsChevronUp
        {...getToggleButtonProps()}
        fontSize="2rem"
        aria-label={'toggle menu'}
      />

      <Menu>
        {isOpen && (
          <div style={comboboxStyles} {...getComboboxProps()}>
            <input
              {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
            />
          </div>
        )}
        <ul {...getMenuProps()} style={menuMultipleStyles}>
          {isOpen &&
            getFilteredItems(items).map((item: any, index: number) => (
              <li key={`${item}${index}`} {...getItemProps({ item, index })}>
                {item.element}
              </li>
            ))}
        </ul>
      </Menu>
    </Wrapper>
  );
};

export default MultiSelect;
