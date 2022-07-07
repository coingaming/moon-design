import Option from "./types/OptionProps";

const getPlaceholderValue = ({
  value,
  options,
  placeholderSlot
}: {
  value?: string,
  options: Option[],
  placeholderSlot?: JSX.Element | string;
}) => {
  return value ?
    options?.filter((option) => option.value === value)[0]?.label
    : placeholderSlot ?? 'Choose an option';
};

export default getPlaceholderValue;
