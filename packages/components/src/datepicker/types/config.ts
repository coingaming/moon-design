import { WeekStartsOn } from './weekStartsOn';

export interface Config {
  weekStartsOn?: WeekStartsOn;
  withHoursAndMinutes?: boolean;
  onlyFuture?: boolean;
  without24AndToday?: boolean;
}
