import polishedRem from 'polished/lib/helpers/rem';
import { sharedTokens } from '@heathmont/moon-themes';

const EXCEPTIONS = [1, 2, 10, 14, 18, '1px', '2px', '10px', '14px', '18px'];

const rem = (value: string | number, baseFontSize: string | number = 16) => {
  const isAlloved = EXCEPTIONS.includes(value);
  const isDivisibleBy4 = typeof value === 'number' && value % 4 === 0;
  if (!(isAlloved || isDivisibleBy4)) {
    // eslint-disable-next-line no-console
    console.warn(
      `ATTENTION! You've used rem(${value}) which is out of Moon DS range! Please check documentation.`
    );
  }
  return polishedRem(value, baseFontSize || sharedTokens.base.fontSize);
};

export default rem;
