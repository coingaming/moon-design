import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.div(({ theme }) => ({
  fontSize: rem(16),
  lineHeight: rem(24),
  color: theme.colors.primary75,
  marginRight: rem(4),
}));

const IndicatorSeparator = ({ ...rest }) => {
  const customProps = rest.selectProps['data-customProps'];
  const amountOfVisibleItems = customProps.amountOfVisibleItems;
  const itemsCount = rest.selectProps.value ? rest.selectProps.value.length : 0;
  const hiddenItems = itemsCount - amountOfVisibleItems;
  if (hiddenItems > 0 && rest.selectProps.isMulti)
    return <Container theme={rest.theme}>+{hiddenItems}</Container>;
  return null;
};

export default IndicatorSeparator;
