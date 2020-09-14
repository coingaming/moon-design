import { DatesRange } from './datesRange';
import { Config } from './config';
import { Translations } from './translations';

export interface DateRangePickerProps {
  format?: string;
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  hasClickedOutside?: boolean;
  setIsOpen?: any;
  setPlaceholder?: any;
  onDateChange: ({
    startDate,
    endDate,
    range,
  }: {
    startDate?: Date;
    endDate?: Date;
    range?: DatesRange;
  }) => any;
  config?: Config;
  translations?: Translations;
}
