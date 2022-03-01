import { DatesRange } from './getDatesFromRange';

const future = ['tomorrow', 'nextWeek', 'nextMonth'];
const past = ['yesterday', 'thisWeek', 'lastWeek', 'thisMonth', 'lastMonth'];

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
    return ['today', ...past]; //'last24hours', 'today'
  }
  return past;
};
