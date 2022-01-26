import addDays from 'date-fns/addDays';
import addMinutes from 'date-fns/addMinutes';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import endOfDay from 'date-fns/endOfDay';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import subDays from 'date-fns/subDays';
import subHours from 'date-fns/subHours';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';

import { RangeConfig } from '../../RangeCalendar';

export type DatesRange =
  | ''
  | 'reset'
  | 'lastMonth'
  | 'lastWeek'
  | 'last24hours'
  | 'yesterday'
  | 'today'
  | 'tomorrow'
  | 'thisWeek'
  | 'nextWeek'
  | 'thisMonth'
  | 'nextMonth';

export const getDatesFromRange = ({
  range,
  fallbackStartDate,
  fallbackEndDate,
  config,
}: {
  range?: DatesRange;
  fallbackStartDate?: Date;
  fallbackEndDate?: Date;
  config?: RangeConfig;
}): { startDate?: Date; endDate?: Date } => {
  const now = new Date();

  if (range === 'reset') {
    return {
      startDate: undefined,
      endDate: undefined,
    };
  }
  if (range === 'lastMonth') {
    const lastMonth = subMonths(now, 1);
    return {
      startDate: startOfMonth(lastMonth),
      endDate: endOfMonth(lastMonth),
    };
  }
  if (range === 'lastWeek') {
    const lastWeek = subWeeks(now, 1);
    return {
      startDate: startOfWeek(lastWeek, config),
      endDate: endOfWeek(lastWeek, config),
    };
  }
  if (range === 'yesterday') {
    const yesterday = subDays(now, 1);
    return {
      startDate: startOfDay(yesterday),
      endDate: endOfDay(yesterday),
    };
  }
  if (range === 'last24hours') {
    const offset = now.getTimezoneOffset();
    return {
      startDate: addMinutes(subHours(now, 24), offset),
      endDate: addMinutes(now, offset),
    };
  }
  if (range === 'today') {
    return {
      startDate: startOfDay(now),
      endDate: endOfDay(now),
    };
  }
  if (range === 'tomorrow') {
    const tomorrow = addDays(now, 1);
    return {
      startDate: startOfDay(tomorrow),
      endDate: endOfDay(tomorrow),
    };
  }
  if (range === 'thisWeek') {
    return {
      startDate: startOfWeek(now, config),
      endDate: endOfWeek(now, config),
    };
  }
  if (range === 'nextWeek') {
    const nextWeek = addWeeks(now, 1);
    return {
      startDate: startOfWeek(nextWeek, config),
      endDate: endOfWeek(nextWeek, config),
    };
  }
  if (range === 'thisMonth') {
    return {
      startDate: startOfMonth(now),
      endDate: endOfMonth(now),
    };
  }
  if (range === 'nextMonth') {
    const nextMonth = addMonths(now, 1);
    return {
      startDate: startOfMonth(nextMonth),
      endDate: endOfMonth(nextMonth),
    };
  }
  return {
    startDate: fallbackStartDate,
    endDate: fallbackEndDate,
  };
};
