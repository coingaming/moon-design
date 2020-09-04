import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import subHours from 'date-fns/subHours';
import addMinutes from 'date-fns/addMinutes';

import { DatesRange } from '../../types/datesRange';
import { Config } from '../../types/config';

export const getDatesFromRange = ({
  range,
  fallbackStartDate,
  fallbackEndDate,
  config,
}: {
  range?: DatesRange;
  fallbackStartDate?: Date;
  fallbackEndDate?: Date;
  config: Config;
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
  if (range === 'tommorow') {
    const tommorow = addDays(now, 1);
    return {
      startDate: startOfDay(tommorow),
      endDate: endOfDay(tommorow),
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
      endDate: startOfMonth(nextMonth),
    };
  }
  return {
    startDate: fallbackStartDate,
    endDate: fallbackEndDate,
  };
};
