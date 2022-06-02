import React from 'react';
import { TextInput } from "@heathmont/moon-core";
import styled from 'styled-components';
import { Select } from '..';
import {CombinedPropType} from "./types/CombinedInputProps";
import {Size, TextInputGroupSize} from "./types/CombinedInputSize";
import { OrientationType, Orientation } from './types/OrientationType';

const Wrapper = styled.div({
  flex: '1',
});

export interface SelectGroupStartProps {
  inputProps: CombinedPropType;
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
  const selectSize = size === Size.medium ? Size.medium : Size.large;
  const inputSize = size === Size.medium ? Size.large : Size.xlarge;

  if (inputProps && inputProps.type === "select") {
    return (
      <Wrapper>
        <Select
          {...inputProps}
          isRtl={isRtl}
          isSharpRightSide={orientation === Orientation.horizontal && !isRtl}
          isSharpLeftSide={orientation === Orientation.horizontal && isRtl}
          isSharpBottomSide={orientation === Orientation.vertical}
          isTopBottomBorderHidden={orientation === Orientation.vertical}
          isSideBorderHidden={orientation === Orientation.horizontal}
          size={selectSize}
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <TextInput
        {...(inputProps ?? { inputSize: Size.medium, type: 'text' })}
        dir={isRtl ? 'rtl' : 'ltr'}
        isSharpRightSide={orientation === Orientation.horizontal && !isRtl}
        isSharpLeftSide={orientation === Orientation.horizontal && isRtl}
        isSharpBottomSide={orientation === Orientation.vertical}
        isTopBottomBorderHidden={orientation === Orientation.vertical}
        isSideBorderHidden={orientation === Orientation.horizontal}
        inputSize={inputSize}
      />
    </Wrapper>
  );
};

export default SelectGroupStart;
