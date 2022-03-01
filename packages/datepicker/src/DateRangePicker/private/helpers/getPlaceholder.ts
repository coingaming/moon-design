import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import type { DatesRange } from '../helpers/getDatesFromRange';
import type RangeConfig from '../types/RangeConfig';
import type RangeTranslations from '../types/RangeTranslations';

const DateFormatWithTime = 'dd/MM/yyyy HH:mm';
const DateFormat = 'dd/MM/yyyy';

type Props = {
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  config?: RangeConfig;
  translations?: RangeTranslations;
};
export const getPlaceholder = ({
  startDate,
  endDate,
  range,
  config,
  translations,
}: Props) => {
  if (!startDate && !endDate && !range) {
    return translations?.placeholder;
  }
  if (range && translations && range in translations) {
    return translations[range];
  }
  if (isValid(startDate) && isValid(endDate)) {
    const dateFormat = config?.withHoursAndMinutes
      ? DateFormatWithTime
      : DateFormat;
    return `${format(startDate || 0, dateFormat)} - ${format(
      endDate || 0,
      dateFormat
    )}`;
  }
  return translations?.placeholder;
};
