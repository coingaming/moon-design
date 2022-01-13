import React from 'react';
import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';

import {
  ControlsChevronLeft,
  ControlsChevronRight,
} from '@heathmont/moon-icons';

import { Month } from './Month';

const PickerContainer = styled.div(
  ({ theme: { color, space, radius, breakpoint, zIndex, shadows } }) => ({
    width: 'fit-content',
    position: 'absolute',
    zIndex: zIndex.dialog,
    alignItems: 'center',
    [mq(breakpoint.medium)]: {},
    borderRadius: rem(12),
    padding: `${rem(16)} ${rem(12)}`,
    backgroundColor: color.gohan[100],
    boxShadow: shadows.lg,
    overflow: 'hidden',
  })
);

const MonthContainer = styled.div({
  width: rem(308),
  position: 'relative',
});

const LeftArrow = styled(ControlsChevronLeft as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  left: rem(2),
  fontSize: rem(24),
}));

const RightArrow = styled(ControlsChevronRight as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  right: rem(2),
  top: 0,
  fontSize: rem(24),
}));

export const Picker: React.FC<any> = ({
  datesState,
  labels,
  onDayClick,
  currentMonth,
  nextMonth,
  prevMonth,
}) => {
  return (
    <PickerContainer>
      <MonthContainer>
        <LeftArrow onClick={prevMonth} />
        <Month
          monthDays={currentMonth}
          monthLabel={labels.monthLabel}
          year={labels.monthYearLabel}
          weekDayLabels={labels.weekDayLabels}
          onDayClick={onDayClick}
          cursorDate={datesState.cursorDate}
          startDate={datesState.currentDate}
        />
        <RightArrow onClick={nextMonth} />
      </MonthContainer>
    </PickerContainer>
  );
};
