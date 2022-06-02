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

export interface SelectGroupEndProps {
  inputProps: CombinedPropType;
  orientation?: OrientationType;
  isRtl?: boolean;
  size?: TextInputGroupSize;
  ref?: React.Ref<any>;
}

const SelectGroupEnd: React.FC<SelectGroupEndProps> = ({
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
          isSharpRightSide={orientation === Orientation.horizontal && isRtl}
          isSharpLeftSide={orientation === Orientation.horizontal && !isRtl}
          isSharpTopSide={orientation === Orientation.vertical}
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
        {...(inputProps ?? { inputSize: 'medium', type: 'text' })}
        dir={isRtl ? 'rtl' : 'ltr'}
        isSharpRightSide={orientation === Orientation.horizontal && isRtl}
        isSharpLeftSide={orientation === Orientation.horizontal && !isRtl}
        isSharpTopSide={orientation === Orientation.vertical}
        isTopBottomBorderHidden={orientation === Orientation.vertical}
        isSideBorderHidden={orientation === Orientation.horizontal}
        inputSize={inputSize}
      />
    </Wrapper>
  );
};

export default SelectGroupEnd;
