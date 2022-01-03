// @ts-nocheck
import React from 'react';
import { components, PlaceholderProps } from 'react-select';
import styled from 'styled-components';

const PlaceholderContainer = styled.div({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
const Placeholder = ({ ...rest }: PlaceholderProps) => {
  return (
    <components.Placeholder {...rest}>
      <PlaceholderContainer>
        {rest.selectProps['data-customProps']?.placeholderSlot}
      </PlaceholderContainer>
    </components.Placeholder>
  );
};

export default Placeholder;
