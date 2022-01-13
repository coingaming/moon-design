import isValid from 'date-fns/isValid';
import format from 'date-fns/format';

const DateFormatWithTime = 'dd/MM/yyyy HH:mm';
const DateFormat = 'dd/MM/yyyy';

const getPlaceholder = ({ date, config, translations }: any) => {
  if (isValid(date)) {
    const dateFormat = config.withHoursAndMinutes
      ? DateFormatWithTime
      : DateFormat;
    return `${format(date, dateFormat)}`;
  }
  return translations.placeholder;
};

export default getPlaceholder;
