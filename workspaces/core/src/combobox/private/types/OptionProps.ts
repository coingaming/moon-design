import InputValue from "./InputValue";

type OptionProps = {
  value?: InputValue;
  children: React.ReactElement | ((data: {
    selected?: boolean;
    disabled?: boolean;
    active?: boolean;
  }) => React.ReactElement);
};

export default OptionProps
