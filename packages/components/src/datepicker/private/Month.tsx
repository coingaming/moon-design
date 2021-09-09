import React from 'react';
import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import compareAsc from 'date-fns/compareAsc';
import getMonth from 'date-fns/getMonth';
import isDate from 'date-fns/isDate';

import { Day } from './Day';

const DayName = styled.div(({ theme }) => ({
  height: rem(32),
  color: theme.color.bulma[100],
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textAlign: 'center',
  userSelect: 'none',
}));

const MonthYearLabel = styled.div(({ theme }) => ({
  fontSize: rem(14),
  lineHeight: rem(20),
  color: theme.color.bulma[100],
  marginBottom: rem(20),
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

interface isInRangePreviewInrerface {
  startDate?: Date;
  hoveredDate?: Date;
  day: Date;
}

const isInRangePreview = ({
  startDate,
  hoveredDate,
  day,
}: isInRangePreviewInrerface) => {
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
    </Days>
  </>
);
