import {rem} from "@heathmont/moon-utils";

export const calcBorderRadius = (interactiveValue: number, fallbackValue: number) => {
  let value = fallbackValue;
  if (
    interactiveValue === 0 ||
    interactiveValue === rem(0) ||
    interactiveValue === rem(9999)
  ) {
    value = interactiveValue;
  }
  return value;
};
