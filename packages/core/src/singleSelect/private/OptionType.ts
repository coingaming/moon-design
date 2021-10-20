type Option = {
  value: string;
  label?: string;
  element:
    | (({ isSelected }: { isSelected?: boolean }) => JSX.Element | string)
    | JSX.Element;
};

export default Option;
