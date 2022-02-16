import type { DatesRange } from '../helpers/getDatesFromRange';

type RangeWeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
export type FooterConfig = {
  isApplyBtn?: boolean;
  isCanselBtn?: boolean;
  isClearBtn?: boolean;
};

interface RangeConfig {
  format?: string;
  monthLabelFormat?: string;
  yearLabelFormat?: string;
  weekStartsOn?: RangeWeekStartsOn;
  withHoursAndMinutes?: boolean;
  onlyFuture?: boolean;
  without24AndToday?: boolean;
  locale?: any;
  ranges?: DatesRange[];
  withPeriodList?: boolean;
  withOneMonth?: boolean;
  hideInputs?: boolean;
  withFooter?: boolean | FooterConfig;
}

export default RangeConfig;
