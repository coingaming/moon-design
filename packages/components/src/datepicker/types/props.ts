import { DatesRange } from './datesRange';
import { Config } from './config';

export interface DateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  onDateChange: ({
    startDate,
    endDate,
    range,
  }: {
    startDate?: Date;
    endDate?: Date;
    range?: DatesRange;
  }) => any;
  config: Config;
  translations: {
    placeholder: any;
    apply: any;
    reset: any;
    lastMonth: any;
    lastWeek: any;
    last24hours: any;
    yesterday: any;
    today: any;
    tommorow: any;
    thisWeek: any;
    nextWeek: any;
    thisMonth: any;
    nextMonth: any;
  };
}
