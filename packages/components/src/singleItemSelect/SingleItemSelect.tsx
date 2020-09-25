import { rem } from '@heathmont/moon-utils';
import React, { useState } from 'react';
import styled from 'styled-components';

type Option = {
  label: string | JSX.Element;
  value: any;
};

type SingleItemSelectProps = {
  value?: any;
  options: Option[];
  onChange: (option: Option) => void;
  maxHeight?: string | number;
};

const List = styled.ul<{ maxHeight?: string | number }>(({ maxHeight }) => ({
  maxHeight,
  overflow: maxHeight ? 'auto' : 'visible',
  listStyle: 'none',
  padding: 0,
  margin: `0 -${rem(12)}`,
}));

const Option = styled.button<{ selected: boolean }>(({ selected, theme }) => ({
  fontSize: rem(14),
  lineHeight: rem(20),
  padding: `${rem(10)} ${rem(12)}`,
  textDecoration: 'none',
  outline: 'none',
  display: 'block',
  border: 'none',
  textAlign: 'left',
  width: '100%',
  cursor: 'pointer',
  ...(selected
    ? {
        color: theme.color.goten[100],
        backgroundColor: theme.color.piccolo[100],
      }
    : {
        color: theme.color.bulma[100],
        backgroundColor: 'transparent',
        '&:hover, &:focus': {
          backgroundColor: theme.color.goku[100],
        },
      }),
}));

const SingleItemSelect: React.FC<SingleItemSelectProps> = ({
  options,
  value,
  onChange,
  maxHeight,
}) => {
  const [actualValue, setActualValue] = useState(value);

  const handleOptionClick = (currentOption: Option) => {
    setActualValue(currentOption.value);
    onChange(currentOption.value);
  };

  return (
    <List maxHeight={maxHeight}>
      {options.map(option => (
        <li key={option.value}>
          <Option
            selected={actualValue === option.value}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </Option>
        </li>
      ))}
    </List>
  );
};

SingleItemSelect.defaultProps = {
  maxHeight: 250,
};

export default SingleItemSelect;
