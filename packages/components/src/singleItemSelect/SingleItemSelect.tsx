import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

type OptionType = {
  label: string | JSX.Element;
  value: any;
};

type SingleItemSelectProps = {
  value?: any;
  options: OptionType[];
  onChange: (value: any) => void;
  maxHeight?: string | number;
};

const List = styled.ul({
  overflow: 'auto',
  listStyle: 'none',
  padding: 0,
  margin: `0 -${rem(12)}`,
});

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
}) => (
  <List style={{ maxHeight }}>
    {options.map((option) => (
      <li key={option.value}>
        <Option
          selected={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Option>
      </li>
    ))}
  </List>
);

SingleItemSelect.defaultProps = {
  maxHeight: 250,
};

export default SingleItemSelect;
