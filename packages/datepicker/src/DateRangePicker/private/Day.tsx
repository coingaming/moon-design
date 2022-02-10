import React from 'react';
import { rem } from '@heathmont/moon-utils';
import format from 'date-fns/format';
import styled from 'styled-components';

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
      height: rem(32),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      fontSize: rem(10),
      color: theme.color.bulma[100],
      userSelect: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      border: '1px solid transparent', // to prevent jumping on hover
      '&:hover': {
        border: `1px solid ${theme.color.trunks[100]}`,
        borderRadius: rem(theme.radius.largest),
      },
    },
    (isInRange || isInRangePreview) && {
      backgroundColor: theme.color.goku[80],
    },
    (isStartEdge || isEndEdge) && {
      background: theme.color.piccolo[100],
      borderRadius: rem(theme.radius.largest),
      color: theme.color.goten[100],
    },
    isToday && {
      fontWeight: 'bold',
    },
  ]
);

const DayWrapper = styled.div<DayStyledProps>(
  ({ theme, isStartEdge, isEndEdge, isInRangePreview }) => [
    isStartEdge && {
      backgroundColor: theme.color.goku[80],
      borderTopLeftRadius: rem(theme.radius.largest),
      borderBottomLeftRadius: rem(theme.radius.largest),
    },
    isEndEdge && {
      backgroundColor: theme.color.goku[80],
      borderTopRightRadius: rem(theme.radius.largest),
      borderBottomRightRadius: rem(theme.radius.largest),
    },
    isInRangePreview && {
      backgroundColor: theme.color.goku[80],
      '&:hover': {
        borderTopRightRadius: rem(theme.radius.largest),
        borderBottomRightRadius: rem(theme.radius.largest),
      },
    },
  ]
);

const EmptyCell = styled.div({
  height: rem(32),
});

const formatLabel = (date: Date) => format(date, 'd');

type DayProps = {
  date: Date;
  isSameMonth: boolean;
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
  isStartEdge,
  isEndEdge,
  isInRange,
  isInRangePreview,
  onDayClick,
  onMouseEnter,
  isToday,
}) => {
  if (!isSameMonth) {
    return <EmptyCell />;
  }

  return (
    <DayWrapper
      isStartEdge={isStartEdge}
      isEndEdge={isEndEdge}
      isInRangePreview={isInRangePreview}
      isInRange={isInRange}
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
