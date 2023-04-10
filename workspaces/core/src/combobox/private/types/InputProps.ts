import { BaseOptionType } from "../../../select/Select";
import InputValue from "./InputValue";

type InputProps = {
  displayValue?: (value: BaseOptionType) => string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  disabled?: boolean;
  isError?: boolean;
  onChange(value: InputValue): void;
  onQueryChange(value: string): void;
  children?: React.ReactElement | ((data: {
    selected?: boolean;
    disabled?: boolean;
    active?: boolean;
  }) => React.ReactElement);
};

export default InputProps
