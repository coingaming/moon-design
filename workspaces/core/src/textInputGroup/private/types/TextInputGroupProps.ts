import type OrientationType from './OrientationType';
import type TextInputProps from '../../../textInput/private/types/TextInputProps';

type TextInputGroupProps = {
  orientation?: OrientationType;
  inputProps?: {
    input1?: TextInputProps;
    input2?: TextInputProps;
  };
  isRtl?: boolean;
  backgroundColor?: string;
};

export default TextInputGroupProps;
