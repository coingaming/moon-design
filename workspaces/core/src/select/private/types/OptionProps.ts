type Option = {
  value: string;
  element:
    | (({ isSelected }: { isSelected?: boolean }) => JSX.Element | string)
    | JSX.Element;
  label: string;
  data?: any;
};

export default Option;
