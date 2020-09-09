import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import addMonths from 'date-fns/addMonths';

import IconArrowLeft from '../../private/icons/IconArrowLeft';
import IconArrowRight from '../../private/icons/IconArrowRight';

import { Month } from './Month';
import { Sidebar } from './Sidebar';
import { InputsPanel } from './InputsPanel';

const PickerContainer = styled.div(({ theme: { color, space, radius } }) => ({
  display: 'grid',
  gridTemplateAreas: `
      "sidebar firstMonth secondMonth"
      "inputs  inputs     inputs"
    `,
  gap: rem(space.default),
  paddingTop: rem(16),
  borderRadius: radius.default,
  padding: space.small,
  backgroundColor: color.goku[100],
  // backgroundColor: 'blue',
  boxShadow: `4px 4px 12px rgba(43, 75, 206, 0.04),
    0px 10px 18px rgba(43, 75, 206, 0.04)`,
  overflow: 'hidden',
}));

const SidebarWrapper = styled.div(({ theme: { color } }) => ({
  gridArea: 'sidebar',
  maxWidth: rem(120),
  background: color.goku[100],
}));

const FirstMonth = styled.div({
  gridArea: 'firstMonth',
  maxWidth: rem(238),
  position: 'relative',
});

const SecondMonth = styled.div({
  gridArea: 'secondMonth',
  maxWidth: rem(238),
  position: 'relative',
});

const LeftArrow = styled(IconArrowLeft as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  left: rem(15),
  fontSize: rem(16),
}));

const RightArrow = styled(IconArrowRight as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  right: rem(15),
  fontSize: rem(16),
}));

export const Picker: React.FC<any> = ({
  weekDayLabels,
  onDayClick,
  onDayMouseEnter,
  range,
  firstMonthLabel,
  firstMonthYearLabel,
  secondMonthLabel,
  secondMonthYearLabel,
  firstMonth,
  secondMonth,
  cursorDate,
  startDate,
  endDate,
  hoveredDate,
  selectRange,
  nextMonth,
  prevMonth,
  setStartDate,
  setEndDate,
  onDateChange,
  translations,
  config,
  apply,
}) => {
  return (
    <PickerContainer>
      <SidebarWrapper>
        <Sidebar
          range={range}
          selectRange={selectRange}
          translations={translations}
          config={config}
        />
      </SidebarWrapper>
      <FirstMonth>
        <LeftArrow onClick={prevMonth} />
        <Month
          key="first"
          monthDays={firstMonth}
          monthLabel={firstMonthLabel}
          year={firstMonthYearLabel}
          weekDayLabels={weekDayLabels}
          onDayClick={onDayClick}
          onMouseEnter={onDayMouseEnter}
          cursorDate={cursorDate}
          startDate={startDate}
          endDate={endDate}
          hoveredDate={hoveredDate}
        />
      </FirstMonth>
      <SecondMonth>
        <RightArrow onClick={nextMonth} />
        <Month
          key="second"
          monthDays={secondMonth}
          monthLabel={secondMonthLabel}
          year={secondMonthYearLabel}
          weekDayLabels={weekDayLabels}
          onDayClick={onDayClick}
          onMouseEnter={onDayMouseEnter}
          cursorDate={addMonths(cursorDate, 1)}
          startDate={startDate}
          endDate={endDate}
          hoveredDate={hoveredDate}
        />
      </SecondMonth>
      <InputsPanel
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onDateChange={onDateChange}
        translations={translations}
        apply={apply}
        config={config}
      />
    </PickerContainer>
  );
};
