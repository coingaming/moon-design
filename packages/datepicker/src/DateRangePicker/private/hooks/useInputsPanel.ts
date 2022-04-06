import React from 'react';
import compareAsc from 'date-fns/compareAsc';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import subDays from 'date-fns/subDays';
import { checkIsDisabledDay } from '../../../private/helper/checkIsDisabledDay';
import RangeConfig from '../types/RangeConfig';

type useInputsPanelProps = {
  startDate?: Date;
  endDate?: Date;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  config?: RangeConfig;
};

const useInputsPanel = ({
  config,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: useInputsPanelProps) => {
  const dateFormat = config?.withHoursAndMinutes
    ? 'yyyy-MM-dd\'T\'HH:mm'
    : 'yyyy-MM-dd';
  const [inputStartDate, setInputStartDate] = React.useState(
    startDate ? format(startDate, dateFormat) : ''
  );
  const [inputEndDate, setInputEndDate] = React.useState(
    endDate ? format(endDate, dateFormat) : ''
  );
  const [hasStartDateError, setStartDateError] = React.useState('');
  const [hasEndDateError, setEndDateError] = React.useState(false);

  React.useEffect(() => {
    const isDisabledStartDay =
      startDate && checkIsDisabledDay(startDate, config?.disabledDays);
    const isDisabledEndDay =
      endDate && checkIsDisabledDay(subDays(endDate, 1), config?.disabledDays);
    setInputStartDate(startDate ? format(startDate, dateFormat) : '');
    setInputEndDate(endDate ? format(endDate, dateFormat) : '');
    const isStartDayBefore = compareAsc(startDate || 0, endDate || 0) === -1;
    if (isStartDayBefore) {
      setStartDateError('');
      setEndDateError(false);
    }
    if (startDate && !endDate) {
      setInputEndDate('');
      setStartDateError('');
      setEndDateError(true);
    }
    if (isDisabledStartDay) {
      setStartDateError('Not valid date');
    }
    if (isDisabledEndDay) {
      setEndDateError(true);
    }
  }, [startDate, endDate]);

  const handelStartDateChange = (e: any) => {
    e.preventDefault();
    setInputStartDate(e.target.value);
    const newStartDate = new Date(e.target.value);
    const isDisabled = checkIsDisabledDay(newStartDate, config?.disabledDays);
    const isValidDate = isValid(newStartDate);
    if (!isValidDate || isDisabled) {
      setStartDateError('Not valid date');
      return;
    }
    if (isValidDate && endDate) {
      const isStartDayBefore = compareAsc(newStartDate, endDate) === -1;
      if (isStartDayBefore) {
        setStartDate(newStartDate);
        setStartDateError('');
        setEndDateError(false);
      } else {
        setStartDateError('Should before');
      }
    }
  };
  const handelEndDateChange = (e: any) => {
    e.preventDefault();
    setInputEndDate(e.target.value);
    const newEndDate = new Date(e.target.value);
    const isDisabled = checkIsDisabledDay(
      subDays(newEndDate, 1),
      config?.disabledDays
    );
    const isValidDate = isValid(newEndDate);
    if (!isValidDate || isDisabled) {
      setEndDateError(true);
      return;
    }
    if (isValidDate && startDate) {
      const isStartDayBefore = compareAsc(startDate, newEndDate) === -1;
      if (isStartDayBefore) {
        setEndDate(newEndDate);
        setStartDateError('');
        setEndDateError(false);
      } else {
        setEndDateError(true);
      }
    }
  };

  return {
    hasStartDateError,
    inputStartDate,
    hasEndDateError,
    inputEndDate,
    handelStartDateChange,
    handelEndDateChange,
  };
};

export default useInputsPanel;
