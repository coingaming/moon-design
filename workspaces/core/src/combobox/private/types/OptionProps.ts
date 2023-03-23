import { BaseOptionType } from "../../../select/Select";

type OptionProps = {
  value?: BaseOptionType;
  children: React.ReactElement | ((data: {
    selected?: boolean;
    disabled?: boolean;
    active?: boolean;
  }) => React.ReactElement);
};

export default OptionProps
