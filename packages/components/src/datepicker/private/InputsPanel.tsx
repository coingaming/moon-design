import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import format from 'date-fns/format';

import { TextInput } from '../..';

const InputsPanelStyled = styled.div(({ theme }) => ({
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
};

export const InputsPanel: React.FC<InputsPanelProps> = ({
  startDate,
  endDate,
}) => {
  return (
    <InputsPanelStyled>
      <Inputs>
        <TextInput
          type="datetime-local"
          value={startDate && format(startDate, "yyyy-MM-dd'T'HH:mm:ss")}
        />
        <To>to</To>
        <TextInput
          type="datetime-local"
          value={endDate && format(endDate, "yyyy-MM-dd'T'HH:mm:ss")}
        />
        {/* <To>UTC</To> */}
      </Inputs>
      {/* <ButtonsWrapper>
        {!isRequired && (
          <Button onClick={onReset} Icon={CrossIcon} iconPosition="right">
            {'Reset'}
          </Button>
        )}
        <Button
          disabled={!isValidInputs}
          onClick={onApply}
          Icon={CheckmarkIcon}
          iconPosition="right"
        >
          {'Apply'}
        </Button>
      </ButtonsWrapper> */}
    </InputsPanelStyled>
  );
};
