import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import compareAsc from 'date-fns/compareAsc';
import getMonth from 'date-fns/getMonth';
import isDate from 'date-fns/isDate';

import { Day } from './Day';

const WeekDayName = styled.div(({ theme }) => ({
  height: rem(28),
  width: rem(28),
  color: theme.color.bulma[100],
  fontWeight: 'bold',
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none',
}));

const MonthStyled = styled.div({});

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

const Wrapper = styled.div({
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
}) => {
  return (
    <MonthStyled>
      <MonthLabelCls>
        {monthLabel}&nbsp;&nbsp;{year}
      </MonthLabelCls>
      <Wrapper>
        {weekDayLabels.map(dayLabel => (
          <WeekDayName key={dayLabel}>{dayLabel}</WeekDayName>
        ))}
        {monthDays.map(day => (
          <Day
            key={day.date}
            onDayClick={onDayClick}
            onMouseEnter={onMouseEnter}
            date={day}
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
            isInRangePreview={isInRangePreview({ startDate, hoveredDate, day })}
          />
        ))}
      </Wrapper>
    </MonthStyled>
  );
};
