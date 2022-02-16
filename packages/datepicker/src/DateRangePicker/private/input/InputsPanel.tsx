import React from 'react';
import styled from 'styled-components';
import useInputsPanel from '../hooks/useInputsPanel';
import HintText from './HintText';
import Ghost from './styles/Ghost';
import Inner from './styles/Inner';
import Input from './styles/Input';
import LabelInner from './styles/LabelInner';
import TextInputGroup from './styles/TextInputGroup';
import type RangeConfig from '../types/RangeConfig';
import type RangeTranslations from '../types/RangeTranslations';

const InputsPanelStyled = styled.div({
  gridArea: 'inputs',
});

type InputsPanelProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: any;
  setEndDate: any;
  onDateChange: any;
  translations: RangeTranslations;
  config: RangeConfig;
};

export const InputsPanel: React.FC<InputsPanelProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  translations,
  config,
}) => {
  const {
    hasStartDateError,
    inputStartDate,
    hasEndDateError,
    inputEndDate,
    handelStartDateChange,
    handelEndDateChange,
  } = useInputsPanel({ config, startDate, endDate, setStartDate, setEndDate });
  const isError = (!!hasStartDateError || hasEndDateError) as boolean;
  return (
    <InputsPanelStyled>
      <TextInputGroup
        isStartError={!!hasStartDateError}
        isEndError={hasEndDateError}
        isOneMonth={config?.withOneMonth || false}
      >
        <Inner bgColor={'gohan'} className="left">
          <Input
            type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
            error={!!hasStartDateError}
            value={inputStartDate}
            onChange={handelStartDateChange}
            isLabel={true}
          />
          <LabelInner>{translations?.labelStartDate}</LabelInner>
          <Ghost className="ghost" />
        </Inner>
        <Inner bgColor={'gohan'} className="right">
          <Input
            type={config.withHoursAndMinutes ? 'datetime-local' : 'date'}
            error={hasEndDateError}
            value={inputEndDate}
            onChange={handelEndDateChange}
            isLabel={true}
          />
          <LabelInner>{translations?.labelEndDate}</LabelInner>
          <Ghost className="ghost" />
        </Inner>
      </TextInputGroup>
      {hasStartDateError && (
        <HintText isError={isError}>{hasStartDateError}</HintText>
      )}
    </InputsPanelStyled>
  );
};
