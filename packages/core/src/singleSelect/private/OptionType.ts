type Option = {
  value: string;
  label?: string;
  element: ({
    isSelected,
  }: {
    isSelected: boolean;
  }) => JSX.Element | JSX.Element | string;
};

export default Option;
