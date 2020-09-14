import isValid from 'date-fns/isValid';
import format from 'date-fns/format';

const DateFormatWithTime = 'dd/MM/yyyy HH:mm';
const DateFormat = 'dd/MM/yyyy';

export const getPlaceholder = ({
  startDate,
  endDate,
  range,
  config,
  translations,
}: any) => {
  if (!startDate && !endDate && !range) {
    return translations.placeholder;
  }
  if (range in translations) {
    return translations[range];
  }
  if (isValid(startDate) && isValid(endDate)) {
    const dateFormat = config.withHoursAndMinutes
      ? DateFormatWithTime
      : DateFormat;
    return `${format(startDate, dateFormat)} - ${format(endDate, dateFormat)}`;
  }
  return translations.placeholder;
};
