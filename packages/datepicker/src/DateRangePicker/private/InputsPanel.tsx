import React from 'react';
import { Button, TextInput } from '@heathmont/moon-components';
import { mq } from '@heathmont/moon-utils';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';

import { RangeConfig, RangeTranslations } from '../RangeCalendar';

import useInputsPanel from './hooks/useInputsPanel';

const InputsPanelStyled = styled.div(({ theme }) => ({
  gridArea: 'inputs',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: rem(theme.space.default),
  [mq(theme.breakpoint.medium, 'max-width')]: {
    '& > * + *': {
      marginTop: rem(theme.space.default),
    },
  },
  [mq(theme.breakpoint.medium)]: {
    flexDirection: 'row',
    '& > * + *': {
      marginLeft: rem(theme.space.default),
    },
  },
}));

const StyledTextInput = styled(TextInput)(({ theme: { breakpoint } }) => ({
  [mq(breakpoint.medium)]: {
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
        error={hasStartDateError}
        type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
        value={inputStartDate}
        onChange={handelStartDateChange}
      />
      <StyledTextInput
        error={hasEndDateError}
        type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
        value={inputEndDate}
        onChange={handelEndDateChange}
      />

      <Button
        variant="primary"
        type="button"
        onClick={apply}
        disabled={!!hasStartDateError || !!hasEndDateError}
      >
        {translations.apply}
      </Button>
    </InputsPanelStyled>
  );
};
