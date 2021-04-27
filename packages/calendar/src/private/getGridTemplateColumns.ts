import { rem } from '@heathmont/moon-utils';

export const getGridTemplateColumns = ({
  weekStartsOn,
  isWeekendMinimized,
}: {
  weekStartsOn: number;
  isWeekendMinimized: boolean;
}) => {
  if (!isWeekendMinimized) return `repeat(7, minmax(${rem(100)}, 1fr))`;
  const defaultColumn = `minmax(${rem(100)}, 1fr)`;
  const minimizedColumn = rem(100);

  switch (weekStartsOn) {
    case 0:
      return `${minimizedColumn} repeat(5, ${defaultColumn}) ${minimizedColumn}`;
    case 1:
      return `repeat(5, ${defaultColumn}) repeat(2, ${minimizedColumn})`;
    default:
      return `repeat(7, ${defaultColumn})`;
  }
};
