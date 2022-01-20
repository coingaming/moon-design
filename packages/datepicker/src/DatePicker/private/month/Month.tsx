import React from 'react';
import styled from 'styled-components';
import isSameDay from 'date-fns/isSameDay';
import getMonth from 'date-fns/getMonth';

import { Day } from '../day/Day';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

import { DisabledDaysRange } from '../../DatePicker';
import { checkIsDisabledDay } from '../helpers/checkIsDisabledDay';

import DayName from './styles/DayName';
import MonthYearLabel from './styles/MonthYearLabel';

type MonthProps = {
  monthDays: Date[];
  monthLabel: string;
  year: string;
  weekDayLabels: string[];
  onDayClick: (date?: Date) => any;
  cursorDate: Date;
  startDate?: Date;
  setMonth: (month?: number) => void;
  setYear: (year?: number) => void;
  disabledDays?: Date | Date[] | DisabledDaysRange;
  yearsRange?: {
    min?: number;
    max?: number;
  };
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
  cursorDate,
  startDate,
  setMonth,
  setYear,
  disabledDays,
  yearsRange,
}) => (
  <>
    <MonthYearLabel>
      <MonthSelect monthLabel={monthLabel} setMonth={setMonth} />
      &nbsp;&nbsp;
      <YearSelect year={year} setYear={setYear} yearsRange={yearsRange} />
    </MonthYearLabel>
    <Days>
      {weekDayLabels.map((dayLabel, weekIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <DayName key={`${dayLabel}-${weekIndex}`}>{dayLabel}</DayName>
      ))}
      {monthDays.map((day) => (
        <Day
          key={day.getTime()}
          onDayClick={onDayClick}
          date={day}
          isToday={isSameDay(day, new Date())}
          isSameMonth={getMonth(day) === getMonth(cursorDate)}
          isStartEdge={Boolean(startDate && isSameDay(startDate, day))}
          isDisabled={checkIsDisabledDay(day, disabledDays)}
        />
      ))}
    </Days>
  </>
);
