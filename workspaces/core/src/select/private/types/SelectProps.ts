import Option from "./OptionProps";

type SelectProps = {
  label?: JSX.Element | string;
  value?: string;
  options?: Option[];
  disabled?: boolean;
  isError?: boolean;
  size?: 'md' | 'lg';
  hintSlot?: JSX.Element | string;
  placeholderSlot?: JSX.Element | string;
  placeholderValue?: JSX.Element | string;
  amountOfVisibleItems?: number;
  onChange?: (value: string) => any;
};

export default SelectProps;
