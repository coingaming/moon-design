import { inlineSvg, rem } from '@heathmont/moon-utils';
import React, { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import Checkbox from '../checkbox/Checkbox';
import { CheckboxIcon } from '../checkbox/private/icon';

import { getElementLabel } from './private/getElementLabel';

type Option = {
  label: string | JSX.Element;
  [key: string]: any;
};

type CheckboxMultiselectProps = {
  onChange: (value: Option[]) => void;
  clearSelectedLabel: string | JSX.Element;
  value: Option[];
  options: Option[];
  maxHeight: string | number;
};

const ClearSelected = styled.a(({ theme }) => ({
  display: 'inline-block',
  color: theme.color.trunks[100],
  fontWeight: theme.fontWeight.semibold,
  cursor: 'pointer',
  marginBottom: rem(10),
  '&:hover, &:focus, &:active': {
    color: theme.color.piccolo[80],
  },
}));

const List = styled.ul<{ maxHeight: string | number }>(({ maxHeight }) => ({
  listStyle: 'none',
  maxHeight,
  overflow: 'scroll',
  paddingLeft: rem(8),
}));

const ListItem = styled.li({
  margin: `${rem(24)} 0`,
  '&:first-child': {
    marginTop: rem(12),
  },
  '&:last-child': {
    marginBottom: rem(12),
  },
});

const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  '& + span::after': {
    borderRadius: rem(2),
  },
  '&:checked + span::after': {
    backgroundColor: theme.color.piccolo[100],
    backgroundImage: inlineSvg(<CheckboxIcon color={theme.color.goten[100]} />),
  },
}));

const CheckboxMultiselect: React.FC<CheckboxMultiselectProps> = props => {
  const { clearSelectedLabel, options, onChange, maxHeight, value } = props;
  const [actualValue, setActualValue] = useState(value);

  useEffect(() => setActualValue(value), [value]);

  const clearSelected = (event: MouseEvent) => {
    event.preventDefault();
    setActualValue([]);
    onChange([]);
  };

  const handleCheckboxChange = (option: Option, checked: boolean) => {
    const newValue = checked
      ? [...actualValue, option]
      : actualValue.filter(
          ({ label }) =>
            getElementLabel(label) !== getElementLabel(option.label)
        );
    setActualValue(newValue);
    onChange(newValue);
  };

  const isChecked = (label: string | JSX.Element) =>
    !!actualValue.find(
      valueItem => getElementLabel(valueItem.label) === getElementLabel(label)
    );

  return (
    <div>
      {!!actualValue.length && (
        <ClearSelected onClick={clearSelected}>
          {clearSelectedLabel}
        </ClearSelected>
      )}
      <List maxHeight={maxHeight}>
        {options.map(option => (
          <ListItem key={getElementLabel(option.label)}>
            <CheckboxStyled
              {...option}
              checked={isChecked(option.label)}
              onChange={event =>
                handleCheckboxChange(option, event.target.checked)
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

CheckboxMultiselect.defaultProps = {
  maxHeight: 250,
};

export default CheckboxMultiselect;
