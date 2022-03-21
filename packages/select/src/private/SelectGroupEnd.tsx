import React from 'react';
import styled from 'styled-components';
import { Select, SelectProps } from '..';
import { OrientationType } from './types/OrientationType';

const Wrapper = styled.div({
  flex: '1',
});

export interface SelectGroupEndProps {
  selectProps: SelectProps<any>;
  orientation?: OrientationType;
  isRtl?: boolean;
  ref?: React.Ref<any>;
}

const SelectGroupEnd: React.FC<SelectGroupEndProps> = ({
  selectProps,
  orientation,
  isRtl,
}) => {
  return (
    <Wrapper>
      <Select
        {...selectProps}
        isRtl={isRtl}
        isSharpRightSide={orientation === 'horizontal' && isRtl}
        isSharpLeftSide={orientation === 'horizontal' && !isRtl}
        isSharpTopSide={orientation === 'vertical'}
        isTopBottomBorderHidden={orientation === 'vertical'}
        isSideBorderHidden={orientation === 'horizontal'}
      />
    </Wrapper>
  );
};

export default SelectGroupEnd;
