import React from 'react';
import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import isSameDay from 'date-fns/isSameDay';
import getMonth from 'date-fns/getMonth';

import { Day } from './Day';

const DayName = styled.div(({ theme }) => ({
  height: rem(40),
  color: theme.color.trunks[100],
  fontSize: rem(12),
  lineHeight: rem(40),
  textTransform: 'uppercase',
  textAlign: 'center',
  userSelect: 'none',
}));

const MonthYearLabel = styled.div(({ theme }) => ({
  fontSize: rem(14),
  lineHeight: rem(24),
  color: theme.color.bulma[100],
  marginBottom: rem(8),
  width: '100%',
  textAlign: 'center',
  userSelect: 'none',
}));

type MonthProps = {
  monthDays: Date[];
  monthLabel: string;
  year: string;
  weekDayLabels: string[];
  onDayClick: (date?: Date) => any;
  cursorDate: Date;
  startDate?: Date;
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
}) => (
  <>
    <MonthYearLabel>
      {monthLabel}&nbsp;&nbsp;{year}
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
        />
      ))}
    </Days>
  </>
);
