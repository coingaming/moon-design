import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { rem } from '@heathmont/moon-utils';

type DayStyledProps = {
  isStartEdge?: boolean;
  isToday?: boolean;
};

const DayWrapper = styled.div({
  margin: rem(2),
});

const DayStyled = styled.div<DayStyledProps>(
  ({ theme, isStartEdge, isToday }) => [
    {
      height: rem(40),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: rem(14),
      color: theme.color.bulma[100],
      userSelect: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      border: '1px solid transparent', // to prevent jumping on hover
      '&:hover': {
        border: `1px solid ${theme.color.trunks[100]}`,
        borderRadius: rem(8),
      },
    },
    isStartEdge && {
      background: theme.color.piccolo[100],
      borderRadius: rem(8),
      color: theme.color.goten[100],
    },
    isToday && {
      fontWeight: 'bold',
    },
  ]
);

const EmptyCell = styled.div({
  height: rem(40),
});

const formatLabel = (date: Date) => format(date, 'd');

type DayProps = {
  date: Date;
  isSameMonth: boolean;
  isStartEdge: boolean;
  isToday: boolean;
  onDayClick: (date?: Date) => any;
};

export const Day: React.FC<DayProps> = ({
  date,
  isSameMonth,
  isStartEdge,
  onDayClick,
  isToday,
}) => {
  if (!isSameMonth) {
    return <EmptyCell />;
  }

  return (
    <DayWrapper>
      <DayStyled
        isStartEdge={isStartEdge}
        isToday={isToday}
        onClick={() => onDayClick(date)}
      >
        {formatLabel(date)}
      </DayStyled>
    </DayWrapper>
  );
};
