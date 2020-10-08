import polishedRem from 'polished/lib/helpers/rem';
import { sharedTokens } from '@heathmont/moon-themes';

const rem = (value: string | number, baseFontSize: string | number = 16) => {
  const isAlloved = [10, 14, 18, '10px', '14px', '18px'].includes(value);
  const isDividedBy4 = typeof value === 'number' && value % 4 === 0;
  if (!(isAlloved || isDividedBy4)) {
    // eslint-disable-next-line no-console
    console.warn(
      `ATTENTION! You've used rem(${value}) which is out of Moon DS range! Please use 4px-step approach instead!`
    );
  }
  return polishedRem(value, baseFontSize || sharedTokens.base.fontSize);
};

export default rem;
