type OptionProps = {
  value?: unknown;
  children: React.ReactElement | ((data: {
    selected?: boolean;
    active?: boolean;
  }) => React.ReactElement);
};

export default OptionProps