import React from 'react';
// import { Button, TextInput } from '@heathmont/moon-components';
import { mq, media } from '@heathmont/moon-utils';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';
import { RangeConfig, RangeTranslations } from '../../RangeCalendar';
import useInputsPanel from '../hooks/useInputsPanel';
import { TextInput } from '@heathmont/moon-core';

const InputsPanelStyled = styled.div(({ theme }) => ({
  gridArea: 'inputs',
  display: 'flex',
  flexDirection: 'row',
}));

const StyledTextInput = styled(TextInput)(({ theme: { newTokens } }) => ({
  [media(newTokens.breakpoint.medium)]: {
    maxWidth: rem(228),
  },
}));

type InputsPanelProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: any;
  setEndDate: any;
  onDateChange: any;
  translations: RangeTranslations;
  apply: any;
  reset: any;
  config: RangeConfig;
};

export const InputsPanel: React.FC<InputsPanelProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  translations,
  apply,
  config,
  // reset,
}) => {
  const {
    hasStartDateError,
    inputStartDate,
    hasEndDateError,
    inputEndDate,
    handelStartDateChange,
    handelEndDateChange,
  } = useInputsPanel({ config, startDate, endDate, setStartDate, setEndDate });

  return (
    <InputsPanelStyled>
      {/* <Button type="button" variant="tertiary" onClick={reset}>
        {translations.reset}
      </Button> */}
      <StyledTextInput
        type="text" // type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
        inputSize="xlarge"
        label="xlarge"
        isError={!!hasStartDateError}
        hintText={hasStartDateError}
        value={inputStartDate}
        onChange={handelStartDateChange}
      />
      <StyledTextInput
        type="text" // type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
        inputSize="xlarge"
        isError={hasEndDateError}
        hintText={hasStartDateError}
        value={inputEndDate}
        onChange={handelEndDateChange}
      />
    </InputsPanelStyled>
  );
};
