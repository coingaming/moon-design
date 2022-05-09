import { rem } from '@heathmont/moon-utils';

const setBorderRadius = (
  interactiveValue: string | number,
  fallbackValue: string
) => {
  let value: string | number = fallbackValue;
  if (interactiveValue === 0 || interactiveValue === rem(9999)) {
    value = interactiveValue;
  }
  return value;
};

export default setBorderRadius;
