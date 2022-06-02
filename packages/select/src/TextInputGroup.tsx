import React from 'react';
import SelectGroupEnd from './private/SelectGroupEnd';
import SelectGroupStart from './private/SelectGroupStart';
import {TextInputGroupProps} from "./private/types/CombinedGroupProps";
import {Size} from "./private/types/CombinedInputSize";
import {Orientation} from "./private/types/OrientationType";
import Container from './styles/Container';

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  inputProps,
  isRtl,
  size = Size.medium,
  orientation = Orientation.horizontal
}) => {
  const dir = isRtl ? 'rtl' : 'ltr';
  const isError = inputProps?.input1?.isError || inputProps?.input2?.isError;

  return (
    <Container orientation={orientation} dir={dir} isError={isError}>
      <SelectGroupStart
        inputProps={inputProps?.input1 ?? { type: 'text' }}
        orientation={orientation}
        isRtl={isRtl}
        size={size}
      />
      <SelectGroupEnd
        inputProps={inputProps?.input2 ?? { type: 'text' }}
        orientation={orientation}
        isRtl={isRtl}
        size={size}
      />
    </Container>
  );
};

export default TextInputGroup;
