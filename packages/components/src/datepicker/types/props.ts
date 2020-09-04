import { WeekStartsOn } from './weekStartsOn';
import { DatesRange } from './datesRange';

export interface DateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  range: DatesRange;
  onDateChange: ({
    startDate,
    endDate,
  }: {
    startDate?: Date;
    endDate?: Date;
  }) => any;
  config: {
    weekStartsOn: WeekStartsOn;
  };
  translations: {
    apply: any;
    selectDates: any;
  };
}
