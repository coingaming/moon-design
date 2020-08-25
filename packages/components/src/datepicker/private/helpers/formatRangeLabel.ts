import format from 'date-fns/format';

export const DateFormatWithTime = 'dd / MM / yyyy HH:mm';
export const DateFormat = 'dd / MM / yyyy';

export const getDateFormat = (withTime?: string) =>
  withTime ? DateFormatWithTime : DateFormat;

type FormatRangeLabelArgs = {
  startDate?: Date;
  endDate?: Date;
  range: any;
  ranges: any[];
  withTime?: string;
  placeholder: string;
};

export const formatRangeLabel = ({
  startDate,
  endDate,
  range,
  ranges,
  withTime,
  placeholder,
}: FormatRangeLabelArgs) => {
  if (!startDate || !endDate) {
    return placeholder;
  }
  if (range !== 'reset') {
    return ranges.find((rangeItem: { id: any }) => rangeItem.id === range)
      .label;
  }
  const dateFormat = getDateFormat(withTime);
  let fd = placeholder;
  try {
    fd = `${format(startDate, dateFormat)} - ${format(endDate, dateFormat)}`;
  } catch (e) {
    fd = placeholder;
  }
  return fd;
};
