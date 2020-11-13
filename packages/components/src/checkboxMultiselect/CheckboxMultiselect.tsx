import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

import Checkbox from '../checkbox/Checkbox';

type Option = {
  label: string | JSX.Element;
  value: any;
  [key: string]: any;
};

type CheckboxMultiselectProps = {
  value?: any[];
  options: Option[];
  onChange: (value: any[]) => void;
  maxHeight?: string | number;
};

const List = styled.ul(() => ({
  overflow: 'auto',
  listStyle: 'none',
  padding: 0,
  margin: `0 -${rem(12)}`,
}));

const Option = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: rem(14),
  lineHeight: rem(20),
  padding: `${rem(10)} ${rem(12)}`,
  textDecoration: 'none',
  outline: 'none',
  border: 'none',
  textAlign: 'left',
  width: '100%',
  cursor: 'pointer',
  color: theme.color.bulma[100],
  backgroundColor: 'transparent',
  'span::before': {
    display: 'none',
  },
  '&:hover, &:focus': {
    backgroundColor: theme.color.goku[100],
  },
}));

const CheckboxMultiselect: React.FC<CheckboxMultiselectProps> = ({
  options,
  value = [],
  onChange,
  maxHeight,
}) => {
  const onCheckboxChange = (optionValue: any) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(currentValue => currentValue !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <List style={{ maxHeight }}>
      {options.map(option => (
        <li key={option.value}>
          <Option>
            <Checkbox
              id={option.id}
              checked={value.some(
                currentValue => currentValue === option.value
              )}
              onChange={() => onCheckboxChange(option.value)}
              label={option.label}
            />
            {/* {option.label} */}
          </Option>
        </li>
      ))}
    </List>
  );
};

CheckboxMultiselect.defaultProps = {
  maxHeight: 250,
};

export default CheckboxMultiselect;
