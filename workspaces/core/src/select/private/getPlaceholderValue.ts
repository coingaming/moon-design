import Option from "./types/OptionProps";

const getPlaceholderValue = ({
  value,
  options,
  placeholder
}: {
  value?: string,
  options: Option[],
  placeholder?: JSX.Element | string;
}) => {
  return value ?
    options?.filter((option) => option.value === value)[0]?.label
    : placeholder ?? 'Choose an option';
};

export default getPlaceholderValue;
