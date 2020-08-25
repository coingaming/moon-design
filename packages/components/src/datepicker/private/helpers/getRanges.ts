const future = [
  {
    id: 'tommorow',
    label: 'Tomorrow',
  },
  {
    id: 'nextWeek',
    label: 'Next week',
  },
  {
    id: 'nextMonth',
    label: 'Next month',
  },
];

const past = [
  {
    id: 'yesterday',
    label: 'Yesterday',
  },
  {
    id: 'thisWeek',
    label: 'This week',
  },
  {
    id: 'lastWeek',
    label: 'Last week',
  },
  {
    id: 'thisMonth',
    label: 'This month',
  },
  {
    id: 'lastMonth',
    label: 'Last month',
  },
];

interface Args {
  onlyFuture?: boolean;
  without24AndToday?: boolean;
}

export const getRanges = ({
  onlyFuture = false,
  without24AndToday = false,
}: Args) => {
  let range = [];
  if (onlyFuture) {
    range = future;
  } else {
    range = past;
    if (!without24AndToday) {
      range = [
        {
          id: 'last24hours',
          label: 'Last 24 hours',
        },
        {
          id: 'today',
          label: 'Today',
        },
        ...range,
      ];
    }
  }
  return range;
};
