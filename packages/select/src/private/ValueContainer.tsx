// @ts-nocheck
import React from 'react';
import { components, ValueContainerProps } from 'react-select';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SingleContainer = styled.div({
  display: 'flex',
});

const MultiContainer = styled.div<{ isHidden: boolean }>(({ isHidden }) => ({
  display: 'flex',
  flexWrap: isHidden ? 'nowrap' : 'wrap',
  gap: rem(8),
  alignItems: 'center',
  overflow: 'hidden',
}));

const InnerLabelContainer = styled.div<{ theme: Theme }>(({ theme }) => ({
  gridArea: '1 / 1 / 2 / 3',
  fontSize: rem(12),
  margin: `0 ${rem(2)}`,
  color: theme.colors.primary75,
}));

const ValueContainer = ({ children, ...rest }: ValueContainerProps) => {
  const size = rest.selectProps['data-customProps']?.size;
  const numberVisibleItems =
    rest.selectProps['data-customProps'].numberVisibleItems;
  const itemsCount = children[0]?.length;
  const visibleChildren =
    itemsCount > 0 && numberVisibleItems
      ? children[0]?.filter((_, i) => i + 1 <= numberVisibleItems)
      : children[0];
  const cloneChildren = [...children];
  cloneChildren[0] = visibleChildren;
  return (
    <components.ValueContainer {...rest}>
      {size === 'xLarge' && (
        <InnerLabelContainer theme={rest.theme}>
          {rest.selectProps['data-customProps'].label}
        </InnerLabelContainer>
      )}
      {rest.isMulti ? (
        <MultiContainer isHidden={!!numberVisibleItems}>
          {cloneChildren}
        </MultiContainer>
      ) : (
        <SingleContainer>{children}</SingleContainer>
      )}
    </components.ValueContainer>
  );
};

export default ValueContainer;
