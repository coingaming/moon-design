type OptionProps = {
  value?: unknown;
  children?: React.ReactNode | ((data: {
    selected?: boolean;
    active?: boolean;
  }) => React.ReactNode);
};

export default OptionProps