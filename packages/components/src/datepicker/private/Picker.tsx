import React from 'react';
import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import addMonths from 'date-fns/addMonths';
import { mq } from '@heathmont/moon-utils';

import IconChevronLeft from '../../private/icons/IconChevronLeft';
import IconChevronRight from '../../private/icons/IconChevronRight';

import { Month } from './Month';
import { Sidebar } from './Sidebar';
import { InputsPanel } from './InputsPanel';

const PickerContainer = styled.div(
  ({
    theme: {
      color, space, radius, breakpoint, zIndex,
    },
  }) => ({
    width: 'fit-content',
    position: 'absolute',
    zIndex: zIndex.dialog,
    display: 'grid',
    gridTemplateAreas: `
      "sidebar"
      "firstMonth"
      "secondMonth"
      "inputs"
    `,
    alignItems: 'center',
    [mq(breakpoint.medium)]: {
      gridTemplateAreas: `
        "sidebar firstMonth secondMonth"
        "sidebar  inputs     inputs"
      `,
      gridTemplateColumns: '2fr 3fr 3fr',
      alignItems: 'baseline',
    },
    paddingBottom: rem(space.default),
    gap: rem(space.default),
    borderRadius: radius.default,
    padding: space.small,
    backgroundColor: color.goku[100],
    boxShadow: `4px 4px 12px ${color.hit[80]},
      0px 10px 18px ${color.hit[80]}`,
    overflow: 'hidden',
  }),
);

const FirstMonth = styled.div({
  gridArea: 'firstMonth',
  maxWidth: rem(236),
  position: 'relative',
});

const SecondMonth = styled.div({
  gridArea: 'secondMonth',
  maxWidth: rem(236),
  position: 'relative',
});

const LeftArrow = styled(IconChevronLeft as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  left: rem(16),
  fontSize: rem(16),
  top: rem(2),
}));

const RightArrow = styled(IconChevronRight as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.bulma[100],
  position: 'absolute',
  right: rem(16),
  fontSize: rem(16),
  top: rem(2),
}));

export const Picker: React.FC<any> = ({
  datesState,
  labels,
  translations,
  config,
  onDayClick,
  onDayMouseEnter,
  firstMonth,
  secondMonth,
  selectRange,
  nextMonth,
  prevMonth,
  setStartDate,
  setEndDate,
  onDateChange,
  apply,
  reset,
}) => (
    <PickerContainer>
      <Sidebar
        range={datesState.range}
        selectRange={selectRange}
        translations={translations}
        config={config}
      />
      <FirstMonth>
        <LeftArrow onClick={prevMonth} />
        <Month
          key="first"
          monthDays={firstMonth}
          monthLabel={labels.firstMonthLabel}
          year={labels.firstMonthYearLabel}
          weekDayLabels={labels.weekDayLabels}
          onDayClick={onDayClick}
          onMouseEnter={onDayMouseEnter}
          cursorDate={datesState.cursorDate}
          startDate={datesState.startDate}
          endDate={datesState.endDate}
          hoveredDate={datesState.hoveredDate}
        />
      </FirstMonth>
      <SecondMonth>
        <RightArrow onClick={nextMonth} />
        <Month
          key="second"
          monthDays={secondMonth}
          monthLabel={labels.secondMonthLabel}
          year={labels.secondMonthYearLabel}
          weekDayLabels={labels.weekDayLabels}
          onDayClick={onDayClick}
          onMouseEnter={onDayMouseEnter}
          cursorDate={addMonths(datesState.cursorDate, 1)}
          startDate={datesState.startDate}
          endDate={datesState.endDate}
          hoveredDate={datesState.hoveredDate}
        />
      </SecondMonth>
      <InputsPanel
        reset={reset}
        startDate={datesState.startDate}
        endDate={datesState.endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onDateChange={onDateChange}
        translations={translations}
        apply={apply}
        config={config}
      />
    </PickerContainer>
);
