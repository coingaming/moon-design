import React from 'react';
import { TextInput } from '../..';
import type TextGroupEndProps from '../private/types/TextGroupEndProps';

const TextGroupEnd = ({
  inputProps,
  orientation,
  isRtl,
}: TextGroupEndProps) => (
  <TextInput
    {...(inputProps ?? { inputSize: 'md', type: 'text' })}
    dir={isRtl ? 'rtl' : 'ltr'}
    isSharpRightSide={orientation === 'horizontal' && isRtl}
    isSharpLeftSide={orientation === 'horizontal' && !isRtl}
    isSharpTopSide={orientation === 'vertical'}
    isTopBottomBorderHidden={orientation === 'vertical'}
    isSideBorderHidden={orientation === 'horizontal'}
  />
);

export default TextGroupEnd;
