import React from 'react';
import styled from 'styled-components';
import { Select, SelectProps } from '..';
import { OrientationType } from './types/OrientationType';

const Wrapper = styled.div({
  flex: 'auto',
});

export interface SelectGroupEndProps {
  selectProps: SelectProps<any>;
  orientation?: OrientationType;
  isRtl?: boolean;
}

const SelectGroupStart: React.FC<SelectGroupEndProps> = ({
  selectProps,
  orientation,
  isRtl,
}) => {
  return (
    <Wrapper>
      <Select
        {...selectProps}
        isSharpRightSide={orientation === 'horizontal' && isRtl}
        isSharpLeftSide={orientation === 'horizontal' && !isRtl}
        isSharpTopSide={orientation === 'vertical'}
      />
    </Wrapper>
  );
};

export default SelectGroupStart;
