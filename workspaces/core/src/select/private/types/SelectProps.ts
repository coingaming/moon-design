import Option from "./OptionProps";

type SelectProps = {
  label?: JSX.Element | string;
  value?: string;
  options?: Option[];
  size?: 'sm' | 'md';
  placeholderSlot?: JSX.Element | string;
  placeholderValue?: JSX.Element | string;
};

export default SelectProps;
