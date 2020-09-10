import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import compareAsc from 'date-fns/compareAsc';
import { rem } from 'polished';

import Button from '../../button/Button';
import TextInput from '../../textInput/TextInput';
import inlineMixin from '../../inlineMixin/inlineMixin';
import { Translations } from '../types/translations';
import { Config } from '../types/config';

const InputsPanelStyled = styled.div(({ theme }) => ({
  gridArea: 'inputs',
  ...inlineMixin(theme.space.default),
}));

const StyledTextInput = styled(TextInput)({
  maxWidth: rem(230),
});

type InputsPanelProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: any;
  setEndDate: any;
  onDateChange: any;
  translations: Translations;
  apply: any;
  reset: any;
  config: Config;
};

export const InputsPanel: React.FC<InputsPanelProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  translations,
  apply,
  config,
  reset,
}) => {
  const dateFormat = config.withHoursAndMinutes
    ? "yyyy-MM-dd'T'HH:mm"
    : 'yyyy-MM-dd';
  const [inputStartDate, setInputStartDate] = React.useState(
    startDate ? format(startDate, dateFormat) : undefined
  );
  const [inputEndDate, setInputEndDate] = React.useState(
    endDate ? format(endDate, dateFormat) : undefined
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
  });

  return (
    <InputsPanelStyled>
      <Button variant="tertiary" onClick={reset}>
        {translations.reset}
      </Button>
      <StyledTextInput
        error={hasStartDateError}
        type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
        value={inputStartDate}
        onChange={e => {
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
        }}
      />
      <StyledTextInput
        error={hasEndDateError}
        type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
        value={inputEndDate}
        onChange={e => {
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
        }}
      />

      <Button
        variant="primary"
        onClick={apply}
        disabled={!!hasStartDateError || !!hasEndDateError}
      >
        {translations.apply}
      </Button>
    </InputsPanelStyled>
  );
};
