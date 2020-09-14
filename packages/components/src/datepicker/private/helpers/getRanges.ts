const future = ['tommorow', 'nextWeek', 'nextMonth'];
const past = ['lastMonth', 'lastWeek', 'yesterday', 'thisWeek', 'thisMonth'];

interface GetRangesArgs {
  onlyFuture?: boolean;
  without24AndToday?: boolean;
}

export const getRanges = ({
  onlyFuture = false,
  without24AndToday = false,
}: GetRangesArgs) => {
  if (onlyFuture) {
    return future;
  }
  if (!without24AndToday) {
    return [...past, 'last24hours', 'today'];
  }
  return past;
};
