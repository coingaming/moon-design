import React from 'react';
import format from 'date-fns/format';
import compareAsc from 'date-fns/compareAsc';
import isValid from 'date-fns/isValid';
import { RangeConfig } from '../../RangeCalendar';

type useInputsPanelProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: any;
  setEndDate: any;
  config: RangeConfig;
};

const useInputsPanel = ({
  config,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: useInputsPanelProps) => {
  const dateFormat = config.withHoursAndMinutes
    ? "yyyy-MM-dd'T'HH:mm"
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
    setInputStartDate(startDate ? format(startDate, dateFormat) : '');
    setInputEndDate(endDate ? format(endDate, dateFormat) : '');
    const isStartDayBefore = compareAsc(startDate, endDate) === -1;
    if (isStartDayBefore) {
      setStartDateError('');
      setEndDateError(false);
    }
    if (startDate && !endDate) {
      setInputEndDate('');
      setStartDateError('');
      setEndDateError(true);
    }
  }, [startDate, endDate]);

  const handelStartDateChange = (e: any) => {
    e.preventDefault();
    setInputStartDate(e.target.value);
    const newStartDate = new Date(e.target.value);
    const isValidDate = isValid(newStartDate);
    if (!isValidDate) {
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
    const isValidDate = isValid(newEndDate);
    if (!isValidDate) {
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
