import React from 'react';
import { TextInput } from '../..';
import { OrientationType } from './types/OrientationType';
import type TextInputProps from '../../textInput/private/types/TextInputProps';

export interface TextGroupStartProps {
  inputProps?: TextInputProps;
  orientation?: OrientationType;
  isRtl?: boolean;
}

const TextGroupStart: React.FC<TextGroupStartProps> = ({
  inputProps,
  orientation,
  isRtl,
}) => {
  return (
    <TextInput
      {...(inputProps ?? { inputSize: 'md', type: 'text' })}
      dir={isRtl ? 'rtl' : 'ltr'}
      isSharpRightSide={orientation === 'horizontal' && !isRtl}
      isSharpLeftSide={orientation === 'horizontal' && isRtl}
      isSharpBottomSide={orientation === 'vertical'}
      isTopBottomBorderHidden={orientation === 'vertical'}
      isSideBorderHidden={orientation === 'horizontal'}
      isFirst={true}
    ></TextInput>
  );
};

export default TextGroupStart;
