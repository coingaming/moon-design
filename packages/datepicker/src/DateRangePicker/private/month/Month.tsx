import React from 'react';
import endOfWeek from 'date-fns/endOfWeek';
import getMonth from 'date-fns/getMonth';
import isDate from 'date-fns/isDate';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import styled from 'styled-components';
import { Day } from '../day/Day';
import { isInRangePreview } from '../helpers/isInRangePreview';
import MonthSelect from './MonthSelect';
import DayName from './styles/DayName';
import MonthYearLabel from './styles/MonthYearLabel';
import YearSelect from './YearSelect';
import type RangeConfig from '../types/RangeConfig';

type MonthProps = {
  monthLabel: string;
  year: string;
  weekDayLabels?: string[];
  monthDays: Date[];
  onDayClick: (selectedDate: Date) => void;
  onMouseEnter: (hoveredDate: Date) => void;
  cursorDate: Date;
  startDate?: Date;
  endDate?: Date;
  hoveredDate?: Date;
  config?: RangeConfig;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  isSecond?: boolean;
  yearsRange?: {
    min?: number;
    max?: number;
  };
  isRtl?: boolean;
};

const Days = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export const Month: React.FC<MonthProps> = ({
  monthLabel,
  year,
  weekDayLabels,
  monthDays,
  onDayClick,
  onMouseEnter,
  cursorDate,
  startDate,
  endDate,
  hoveredDate,
  setMonth,
  setYear,
  yearsRange,
  config,
  isSecond,
  isRtl,
}) => {
  return (
    <>
      <MonthYearLabel>
        {config?.hideInputs ? (
          <>
            <MonthSelect
              monthLabel={monthLabel}
              setMonth={setMonth}
              isSecond={isSecond}
              isRtl={isRtl}
            />
            &nbsp;&nbsp;
            <YearSelect
              year={year}
              setYear={setYear}
              yearsRange={yearsRange}
              isRtl={isRtl}
            />
          </>
        ) : (
          <>
            {monthLabel} &nbsp;&nbsp; {year}
          </>
        )}
      </MonthYearLabel>
      <Days>
        {weekDayLabels?.map((dayLabel, weekIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <DayName key={`${dayLabel}-${weekIndex}`}>{dayLabel}</DayName>
        ))}
        {monthDays.map((day) => {
          const startOfWeekDay = startOfWeek(day, { weekStartsOn: 1 });
          const endOfWeekDay = endOfWeek(day, { weekStartsOn: 1 });
          return (
            <Day
              key={day.getTime()}
              onDayClick={onDayClick}
              onMouseEnter={onMouseEnter}
              date={day}
              isStartOfWeek={isSameDay(startOfWeekDay, day)}
              isEndOfWeek={isSameDay(endOfWeekDay, day)}
              isToday={isSameDay(day, new Date())}
              isSameMonth={getMonth(day) === getMonth(cursorDate)}
              isStartEdge={Boolean(startDate && isSameDay(startDate, day))}
              isEndEdge={Boolean(endDate && isSameDay(endDate, day))}
              isInRange={Boolean(
                startDate &&
                  isDate(startDate) &&
                  endDate &&
                  isDate(endDate) &&
                  isWithinInterval(day, {
                    start: startDate,
                    end: endDate,
                  })
              )}
              isInRangePreview={isInRangePreview({
                startDate,
                hoveredDate,
                day,
              })}
              isRtl={isRtl}
            />
          );
        })}
      </Days>
    </>
  );
};
