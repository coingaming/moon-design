import { inlineSvg, rem } from '@heathmont/moon-utils';
import React, { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import Checkbox from '../checkbox/Checkbox';
import { CheckboxIcon } from '../checkbox/private/icon';

import Toggle from './private/Toggle';

type Option = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string | JSX.Element;
  value: any;
  innerOptions?: Option[];
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
  textDecoration: 'none',
  '&:hover, &:focus, &:active': {
    color: theme.color.piccolo[80],
  },
}));

const List = styled.ul<{ maxHeight?: string | number }>(({ maxHeight }) => ({
  listStyle: 'none',
  maxHeight,
  overflow: maxHeight ? 'auto' : 'visible',
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
  ul: {
    paddingLeft: 0,
    marginTop: rem(24),
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

  const handleCheckboxChange = (currentOption: Option, checked: boolean) => {
    const newValue = checked
      ? [...actualValue, currentOption]
      : actualValue.filter(option => option.value !== currentOption.value);
    setActualValue(newValue);
    onChange(newValue);
  };

  const isChecked = (optionValue: any) =>
    !!actualValue.find(option => optionValue === option.value);

  return (
    <div>
      {!!actualValue.length && (
        <ClearSelected href="#" onClick={clearSelected}>
          {clearSelectedLabel}
        </ClearSelected>
      )}
      <List maxHeight={maxHeight}>
        {options.map(option => (
          <ListItem key={option.value}>
            {option.innerOptions && option.innerOptions.length ? (
              <Toggle
                header={
                  <CheckboxStyled
                    {...option}
                    checked={isChecked(option.value)}
                    onChange={event =>
                      handleCheckboxChange(option, event.target.checked)
                    }
                  />
                }
              >
                <List>
                  {option.innerOptions.map(innerOption => (
                    <ListItem key={innerOption.value}>
                      <CheckboxStyled
                        {...innerOption}
                        checked={isChecked(innerOption.value)}
                        onChange={event =>
                          handleCheckboxChange(
                            innerOption,
                            event.target.checked
                          )
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Toggle>
            ) : (
              <CheckboxStyled
                {...option}
                checked={isChecked(option.value)}
                onChange={event =>
                  handleCheckboxChange(option, event.target.checked)
                }
              />
            )}
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
