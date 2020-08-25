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

// TODO: check styles when selecting last month
const DayStyled = styled.div<DayStyledProps>(
  ({ isInRange, isInRangePreview, isStartEdge, isEndEdge, isToday }) => [
    {
      width: rem(28),
      height: rem(28),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      fontWeight: 500,
      fontSize: rem(10),
      color: '#2b4bce',
      userSelect: 'none',
      cursor: 'pointer',
      // '&:hover': {
      //   border: '1px solid #2b4bce',
      //   borderRadius: rem(3),
      // },
    },
    isInRange && {
      backgroundColor: '#e9eefa',
    },
    isInRangePreview && {
      backgroundColor: '#e9eefa',
    },
    isStartEdge && {
      background: '#2b4bce',
      borderRadius: rem(3),
      color: 'white',
    },
    isEndEdge && {
      background: '#2b4bce',
      borderRadius: rem(3),
      color: 'white',
    },
    isToday && {
      fontWeight: 'bold',
    },
  ]
);

type DayWrapperProps = {
  isInRange?: boolean;
};

const DayWrapper = styled.div<DayWrapperProps>(({ isInRange }) => [
  {
    paddingLeft: rem(12),
    marginBottom: rem(8),
    height: rem(28),
  },
  isInRange && {
    background: '#e9eefa',
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
