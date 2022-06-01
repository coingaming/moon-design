import React from 'react';
import { TextInput } from "@heathmont/moon-core";
import styled from 'styled-components';
import { InputPropType, Select, TextInputGroupSize } from '..';
import { OrientationType } from './types/OrientationType';

const Wrapper = styled.div({
  flex: '1',
});

export interface SelectGroupStartProps {
  inputProps: InputPropType;
  orientation?: OrientationType;
  isRtl?: boolean;
  size?: TextInputGroupSize;
}

const SelectGroupStart: React.FC<SelectGroupStartProps> = ({
  inputProps,
  orientation,
  isRtl,
  size
}) => {
  const selectSize = size === "medium" ? "medium" : "large";
  const inputSize = size === "medium" ? "large" : "xlarge";
  if(inputProps && inputProps.type === "select") {
    return (
      <Wrapper>
        <Select
          {...inputProps}
          isRtl={isRtl}
          isSharpRightSide={orientation === 'horizontal' && !isRtl}
          isSharpLeftSide={orientation === 'horizontal' && isRtl}
          isSharpBottomSide={orientation === 'vertical'}
          isTopBottomBorderHidden={orientation === 'vertical'}
          isSideBorderHidden={orientation === 'horizontal'}
          size={selectSize}
        />
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <TextInput
        {...(inputProps ?? { inputSize: 'medium', type: 'text' })}
        dir={isRtl ? 'rtl' : 'ltr'}
        isSharpRightSide={orientation === 'horizontal' && !isRtl}
        isSharpLeftSide={orientation === 'horizontal' && isRtl}
        isSharpBottomSide={orientation === 'vertical'}
        isTopBottomBorderHidden={orientation === 'vertical'}
        isSideBorderHidden={orientation === 'horizontal'}
        inputSize={inputSize}
      ></TextInput>
    </Wrapper>
  );
};

export default SelectGroupStart;
