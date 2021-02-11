import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

import Checkbox from '../checkbox/Checkbox';
import Inline from '../inline/Inline';
import Text from '../text/Text';

type OptionType = {
  label: string | JSX.Element;
  value: any;
  count?: number;
  [key: string]: any;
};

type CheckboxMultiselectProps = {
  value?: any[];
  options: OptionType[];
  onChange: (value: any[]) => void;
  maxHeight?: string | number;
};

const List = styled.ul(() => ({
  overflow: 'auto',
  listStyle: 'none',
  padding: 0,
  margin: `0 0 0 -${rem(12)}`,
}));

const Option = styled.label(({ theme }) => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  fontSize: rem(14),
  lineHeight: rem(20),
  padding: `${rem(10)} ${rem(12)}`,
  margin: 0,
  textDecoration: 'none',
  outline: 'none',
  border: 'none',
  textAlign: 'left',
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
      onChange(value.filter((currentValue) => currentValue !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <List style={{ maxHeight }}>
      {options.map((option) => (
        <Inline key={option.value} space="xsmall">
          <Option>
            <Checkbox
              id={option.id}
              checked={value.some(
                (currentValue) => currentValue === option.value
              )}
              onChange={() => onCheckboxChange(option.value)}
              disabled={option.count === undefined ? false : !option.count}
              label={option.label}
            />
          </Option>
          {option.count !== undefined && (
            <Text size={14} color="trunks.100" test-id="select-count">
              {option.count}
            </Text>
          )}
        </Inline>
      ))}
    </List>
  );
};

CheckboxMultiselect.defaultProps = {
  maxHeight: 250,
};

export default CheckboxMultiselect;
