import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import compareAsc from 'date-fns/compareAsc';

import { Button, TextInput } from '../..';
import { Translations } from '../types/translations';
import { Config } from '../types/config';

const InputsPanelStyled = styled.div(({ theme }) => ({
  gridArea: 'inputs',
  height: rem(56),
  background: theme.color.goku[100],
  display: 'flex',
  alignItems: 'center',
  paddingLeft: rem(20),
  boxSizing: 'border-box',
  width: '100%',
  justifyContent: 'space-between',
}));

const To = styled.span(({ theme }) => ({
  marginLeft: rem(18),
  marginRight: rem(18),
  fontWeight: 500,
  fontSize: rem(12),
  lineHeight: rem(16),
  textAlign: 'center',
  color: theme.color.bulma[100],
  userSelect: 'none',
}));

const Inputs = styled.div({
  display: 'flex',
  alignItems: 'center',
});

type InputsPanelProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: any;
  setEndDate: any;
  onDateChange: any;
  translations: Translations;
  apply: any;
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
      <Inputs>
        <TextInput
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
        <To>{translations.to}</To>
        <TextInput
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
      </Inputs>
      <Button
        variant="tertiary"
        onClick={apply}
        disabled={!!hasStartDateError || !!hasEndDateError}
      >
        {translations.apply}
      </Button>
    </InputsPanelStyled>
  );
};
