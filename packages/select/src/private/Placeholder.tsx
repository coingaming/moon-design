import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { components, PlaceholderProps } from 'react-select';
import styled from 'styled-components';
import type { SelectProps } from '../styles/CustomStyles';

const PlaceholderContainer = styled.div<{ isTopPadding?: boolean }>(
  ({ isTopPadding }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingTop: isTopPadding ? rem(4) : 0,
  })
);

// any - https://github.com/JedWatson/react-select/issues/4804
const Placeholder = ({ ...rest }: PlaceholderProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  const isTopPadding =
    rest.isMulti && !customProps.label && customProps.size === 'xLarge';
  return (
    <components.Placeholder {...rest}>
      <PlaceholderContainer isTopPadding={isTopPadding}>
        {customProps?.placeholderSlot}
      </PlaceholderContainer>
    </components.Placeholder>
  );
};

export default Placeholder;
