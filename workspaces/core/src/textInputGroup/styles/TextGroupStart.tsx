import React from 'react';
import { TextInput } from '../..';
import type TextGroupStartProps from '../private/types/TextGroupStartProps';

const TextGroupStart = ({
  inputProps,
  orientation,
  isRtl,
}: TextGroupStartProps) => (
  <TextInput
    {...(inputProps ?? { inputSize: 'md', type: 'text' })}
    dir={isRtl ? 'rtl' : 'ltr'}
    isSharpRightSide={orientation === 'horizontal' && !isRtl}
    isSharpLeftSide={orientation === 'horizontal' && isRtl}
    isSharpBottomSide={orientation === 'vertical'}
    isTopBottomBorderHidden={orientation === 'vertical'}
    isSideBorderHidden={orientation === 'horizontal'}
    isFirst={true}
  />
);

export default TextGroupStart;
