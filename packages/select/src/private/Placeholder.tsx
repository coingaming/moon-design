import React from 'react';
import { components, PlaceholderProps } from 'react-select';
import styled from 'styled-components';
import type { SelectProps } from '../styles/CustomStyles';

const PlaceholderContainer = styled.div({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const Placeholder = ({ ...rest }: PlaceholderProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  return (
    <components.Placeholder {...rest}>
      <PlaceholderContainer>
        {customProps?.placeholderSlot}
      </PlaceholderContainer>
    </components.Placeholder>
  );
};

export default Placeholder;
