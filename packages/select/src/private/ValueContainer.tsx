import React from 'react';
import { components, ValueContainerProps, Props } from 'react-select';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { Theme } from '@heathmont/moon-themes';

type CustomProps = {
  isCustomControl?: boolean;
  headerSlot?: JSX.Element;
  footerSlot?: JSX.Element;
  menuWidth?: number;
  label?: string;
  leftSlot?: JSX.Element;
  hintSlot?: JSX.Element | string;
  placeholderSlot?: JSX.Element | string;
  size?: 'large' | 'xLarge';
  amountOfVisibleItems?: number;
  isError?: boolean;
  theme: Theme;
};

type SelectProps = {
  'data-customProps': CustomProps;
} & Props;

const SingleContainer = styled.div<{ isXLarge: boolean }>(({ isXLarge }) => ({
  ...(isXLarge ? { alignSelf: 'flex-start' } : {}),
  display: 'flex',
}));

const MultiContainer = styled.div<{ isHidden: boolean }>(({ isHidden }) => ({
  display: 'flex',
  flexWrap: isHidden ? 'nowrap' : 'wrap',
  gap: rem(8),
  padding: `${rem(4)} 0`,
  height: '100%',
  alignItems: 'center',
  overflow: 'hidden',
  '& > span': {
    maxHeight: rem(16),
    whiteSpace: 'nowrap',
  },
}));

const InnerLabelContainer = styled.div<{ theme: Theme }>(({ theme }) => ({
  gridArea: '1 / 1 / 2 / 3',
  fontSize: rem(12),
  color: theme.colors.primary75,
}));

// any - https://github.com/JedWatson/react-select/issues/4804
const ValueContainer = ({ children, ...rest }: ValueContainerProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  const size = customProps?.size;
  const amountOfVisibleItems = customProps.amountOfVisibleItems;
  const items = children as any;
  const itemsCount = items[0]?.length;
  const visibleChildren =
    itemsCount > 0 && amountOfVisibleItems
      ? // @ts-ignore
        items[0]?.filter((_, i) => i + 1 <= amountOfVisibleItems)
      : items[0];
  const cloneChildren = [...items];
  cloneChildren[0] = visibleChildren;
  return (
    <components.ValueContainer {...rest}>
      {size === 'xLarge' && (
        <InnerLabelContainer theme={rest.theme}>
          {customProps.label}
        </InnerLabelContainer>
      )}
      {rest.isMulti ? (
        <MultiContainer isHidden={!!amountOfVisibleItems}>
          {cloneChildren}
        </MultiContainer>
      ) : (
        <SingleContainer isXLarge={customProps.size === 'xLarge'}>
          {children}
        </SingleContainer>
      )}
    </components.ValueContainer>
  );
};

export default ValueContainer;
