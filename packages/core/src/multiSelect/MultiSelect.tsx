import React, { useRef, useState } from 'react';
import Badge from '../badge/Badge';
import {
  ControlsClose,
  ControlsChevronUp,
  ControlsChevronDown,
} from '@heathmont/moon-icons/lib';
import { rem } from '@heathmont/moon-utils';
import { Inline, Stack } from '@heathmont/moon-components/lib';

import SearchWrapper from './styles/SearchWrapper';

import Label from './styles/Label';
import ListItem from './styles/ListItem';
import Menu from './styles/Menu';
import InputWrapper from './styles/InputWrapper';
import InnerContainer from './styles/InnerContainer';
import Container from './styles/Container';
import HintText from './styles/HintText';

import useOutsideClicker from './private/useOutsideClicker';

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
  label: JSX.Element | string;
  search?: JSX.Element;
  footer?: JSX.Element;
  initialSelectedItems: string[];
  isExpanded?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (newSelectedItems: string[]) => any;
  hintText?: JSX.Element | string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  label,
  search,
  footer,
  initialSelectedItems = [],
  isExpanded,
  disabled,
  error,
  hintText,
  onChange,
}) => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [isExpandedInner, setIsExpanded] = useState(
    disabled ? false : isExpanded
  );
  const wrapperRef = useRef(null);

  const toggleExpanded = () =>
    setIsExpanded(disabled ? false : !isExpandedInner);

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
    if (disabled) return;
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

  useOutsideClicker(wrapperRef, toggleExpanded);

  return (
    <Container>
      <InnerContainer ref={wrapperRef}>
        <InputWrapper
          onClick={toggleExpanded}
          isExpandedInner={isExpandedInner}
          disabled={disabled}
          error={error}
        >
          <Stack
            space={isEmptySelectedItems ? 0 : rem(6)}
            style={{ position: 'relative', zIndex: 5 }}
          >
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
                    style={{ cursor: disabled ? 'default' : 'pointer' }}
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
            <ControlsChevronDown
              fontSize={rem(24)}
              aria-label={'Toggle menu'}
            />
          )}
        </InputWrapper>

        {isExpandedInner ? (
          <Menu>
            {search ? <SearchWrapper>{search}</SearchWrapper> : null}
            {/* {topContent && topContent} */}
            <ul>
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
            </ul>
            {footer && footer}
          </Menu>
        ) : null}
      </InnerContainer>
      {hintText && <HintText isError={error}>{hintText}</HintText>}
    </Container>
  );
};

export default MultiSelect;
