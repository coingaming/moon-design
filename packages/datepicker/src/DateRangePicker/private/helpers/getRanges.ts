import { DatesRange } from './getDatesFromRange';

const future = ['tomorrow', 'nextWeek', 'nextMonth'];
const past = ['lastMonth', 'lastWeek', 'yesterday', 'thisWeek', 'thisMonth'];

interface GetRangesArgs {
  ranges?: DatesRange[];
  onlyFuture?: boolean;
  without24AndToday?: boolean;
}

export const getRanges = ({
  ranges,
  onlyFuture = false,
  without24AndToday = false,
}: GetRangesArgs) => {
  if (ranges) {
    return ranges;
  }
  if (onlyFuture) {
    return future;
  }
  if (!without24AndToday) {
    return [...past, 'last24hours', 'today'];
  }
  return past;
};
