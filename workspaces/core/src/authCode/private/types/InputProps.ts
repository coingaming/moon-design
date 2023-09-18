import type InputMode from './InputMode';
import type InputType from './InputType';

type InputProps = {
  type: InputType;
  inputMode: InputMode;
  pattern: string;
  min?: string;
  max?: string;
};

export default InputProps;
