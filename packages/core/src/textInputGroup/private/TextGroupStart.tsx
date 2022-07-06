import React from 'react';
import { TextInput, TextInputProps } from '../..';
import { OrientationType } from './types/OrientationType';

export interface TextGroupStartProps {
  inputProps?: TextInputProps;
  orientation?: OrientationType;
  isRtl?: boolean;
}

const TextGroupStart: React.FC<TextGroupStartProps> = ({
  inputProps,
  orientation,
  isRtl,
}) => (
  <TextInput
    {...(inputProps ?? { type: 'text' })}
    inputSize={inputProps?.inputSize || 'xlarge'}
    dir={isRtl ? 'rtl' : 'ltr'}
    isSharpRightSide={orientation === 'horizontal' && !isRtl}
    isSharpLeftSide={orientation === 'horizontal' && isRtl}
    isSharpBottomSide={orientation === 'vertical'}
    isTopBottomBorderHidden={orientation === 'vertical'}
    isSideBorderHidden={orientation === 'horizontal'}
  ></TextInput>
);

export default TextGroupStart;
