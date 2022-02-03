import React from 'react';
import { Month } from '../month/Month';
import LeftArrow from './styles/LeftArrow';
import MonthContainer from './styles/MonthContainer';
import PickerContainer from './styles/PickerContainer';
import RightArrow from './styles/RightArrow';

export const Picker: React.FC<any> = ({
  datesState,
  labels,
  onDayClick,
  currentMonth,
  nextMonth,
  prevMonth,
  setMonth,
  setYear,
  config,
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
          setMonth={setMonth}
          setYear={setYear}
          disabledDays={config.disabledDays}
          yearsRange={config.yearsRange}
        />
        <RightArrow onClick={nextMonth} />
      </MonthContainer>
    </PickerContainer>
  );
};
