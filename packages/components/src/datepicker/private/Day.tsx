import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { rem } from 'polished';

type DayStyledProps = {
  isInRange?: boolean;
  isInRangePreview?: boolean;
  isStartEdge?: boolean;
  isEndEdge?: boolean;
  isToday?: boolean;
};

const DayStyled = styled.div<DayStyledProps>(
  ({ theme, isInRange, isInRangePreview, isStartEdge, isEndEdge, isToday }) => [
    {
      width: rem(28),
      height: rem(28),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      fontWeight: 500,
      fontSize: rem(10),
      color: theme.color.bulma[100],
      userSelect: 'none',
      cursor: 'pointer',
      '&:hover': {
        border: `1px solid ${theme.color.trunks[100]}`,
        borderRadius: rem(3),
      },
    },
    (isInRange || isInRangePreview) && {
      backgroundColor: theme.color.goku[40],
    },
    (isStartEdge || isEndEdge) && {
      background: theme.color.piccolo[100],
      borderRadius: rem(3),
      color: theme.color.bulma[100],
    },
    isToday && {
      fontWeight: 'bold',
    },
  ]
);

type DayWrapperProps = {
  isInRange?: boolean;
};

const DayWrapper = styled.div<DayWrapperProps>(({ theme, isInRange }) => [
  {
    paddingLeft: rem(12),
    marginBottom: rem(8),
    height: rem(28),
  },
  isInRange && {
    background: theme.color.goku[40],
  },
]);

const formatLabel = (date: Date) => format(date, 'd');

type DayProps = {
  date: Date;
  isSameMonth: boolean;
  isFirstDayOfWeek: boolean;
  isFirstDayOfMonth: boolean;
  isStartEdge: boolean;
  isEndEdge: boolean;
  isInRange: boolean;
  isInRangePreview: boolean;
  isToday: boolean;
  onDayClick: any;
  onMouseEnter: any;
};

export const Day: React.FC<DayProps> = ({
  date,
  isSameMonth,
  isFirstDayOfWeek,
  isFirstDayOfMonth,
  isStartEdge,
  isEndEdge,
  isInRange,
  isInRangePreview,
  onDayClick,
  onMouseEnter,
  isToday,
}) => {
  if (!isSameMonth) {
    return (
      <DayWrapper>
        <DayStyled />
      </DayWrapper>
    );
  }

  return (
    <DayWrapper
      isInRange={
        (isInRange || isInRangePreview) &&
        !isStartEdge &&
        !isFirstDayOfMonth &&
        !isFirstDayOfWeek
      }
    >
      <DayStyled
        isStartEdge={isStartEdge}
        isEndEdge={isEndEdge}
        isInRange={isInRange}
        isInRangePreview={isInRangePreview}
        isToday={isToday}
        onClick={() => onDayClick(date)}
        onMouseEnter={() => onMouseEnter(date)}
      >
        {formatLabel(date)}
      </DayStyled>
    </DayWrapper>
  );
};
