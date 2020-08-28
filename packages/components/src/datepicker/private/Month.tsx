import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import isSameDay from 'date-fns/isSameDay';
import isMonday from 'date-fns/isMonday';
import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth';
import isWithinInterval from 'date-fns/isWithinInterval';
import compareAsc from 'date-fns/compareAsc';
import getMonth from 'date-fns/getMonth';
import isDate from 'date-fns/isDate';

import { Day } from './Day';

const WeekDayName = styled.div(({ theme }) => ({
  width: rem(40),
  height: rem(28),
  paddingLeft: rem(12),
  color: theme.color.bulma[100],
  fontWeight: 'bold',
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none',
}));

const WeekDayContainer = styled.div({
  display: 'flex',
  width: '100%',
  paddingBottom: rem(16),
});

const MonthStyled = styled.div({
  width: rem(281),
  display: 'flex',
  flexWrap: 'wrap',
});

const MonthLabelCls = styled.div(({ theme }) => ({
  fontWeight: 500,
  fontSize: rem(14),
  color: theme.color.bulma[100],
  marginBottom: rem(28),
  width: '100%',
  textAlign: 'center',
  userSelect: 'none',
}));

type MonthProps = {
  monthLabel: string;
  year: string;
  weekDayLabels: string[];
  monthDays: any[];
  onDayClick: any;
  onMouseEnter: any;
  cursorDate: Date;
  startDate?: Date;
  endDate?: Date;
  hoveredDate?: Date;
};

interface isInRangePreview {
  startDate?: Date;
  hoveredDate?: Date;
  day: Date;
}

const isInRangePreview = ({
  startDate,
  hoveredDate,
  day,
}: isInRangePreview) => {
  if (!startDate) {
    return false;
  }
  if (!hoveredDate) {
    return false;
  }
  const isHoveredAfter = compareAsc(hoveredDate, startDate) > 0;
  if (isHoveredAfter) {
    return isWithinInterval(day, {
      start: startDate,
      end: hoveredDate,
    });
  }
  return isWithinInterval(day, {
    start: hoveredDate,
    end: startDate,
  });
};

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
}) => {
  return (
    <MonthStyled>
      <MonthLabelCls>
        {monthLabel} &nbsp; &nbsp; {year}
      </MonthLabelCls>
      <WeekDayContainer>
        {weekDayLabels.map(dayLabel => (
          <WeekDayName key={dayLabel}>{dayLabel}</WeekDayName>
        ))}
      </WeekDayContainer>
      {monthDays.map(day => (
        <Day
          key={day.date}
          onDayClick={onDayClick}
          onMouseEnter={onMouseEnter}
          date={day}
          isToday={isSameDay(day, new Date())}
          isSameMonth={getMonth(day) === getMonth(cursorDate)}
          isFirstDayOfWeek={isMonday(day)}
          isFirstDayOfMonth={isFirstDayOfMonth(day)}
          isStartEdge={Boolean(startDate && isSameDay(startDate, day))}
          isEndEdge={Boolean(endDate && isSameDay(endDate, day))}
          isInRange={Boolean(
            isDate(startDate) &&
              isDate(endDate) &&
              isWithinInterval(day, {
                start: startDate,
                end: endDate,
              })
          )}
          isInRangePreview={isInRangePreview({ startDate, hoveredDate, day })}
        />
      ))}
    </MonthStyled>
  );
};
