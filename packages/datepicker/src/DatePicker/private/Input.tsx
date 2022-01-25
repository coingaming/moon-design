import React from 'react';
import { TextInput } from '@heathmont/moon-core';
import { ControlsChevronDown } from '@heathmont/moon-icons';
import { parse, isValid } from 'date-fns';
import { enGB } from 'date-fns/locale';
import rem from 'polished/lib/helpers/rem';
import styled from 'styled-components';

export type InputProps = {
  placeholder?: any;
  setPlaceholder?: React.Dispatch<any>;
  setInputValue?: React.Dispatch<any>;
  onDateChange?: ({ date }: { date?: Date }) => any;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const TextInputContainer = styled.div({
  position: 'relative',
  cursor: 'pointer',
  minWidth: rem(320),
});

const DownArrow = styled(ControlsChevronDown as any)(({ theme, open }) => ({
  position: 'absolute',
  top: '50%',
  right: rem(16),
  transform: open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
  color: theme.color.bulma[100],
  fontSize: rem(24),
}));

const Input: React.FC<InputProps> = ({
  placeholder,
  setPlaceholder,
  setInputValue,
  onDateChange,
  isOpen,
  setIsOpen,
}) => {
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const dateStr = event.target.value;
    typeof setPlaceholder === 'function' && setPlaceholder(dateStr);
    const parsedDate = parse(dateStr, 'P', new Date(), { locale: enGB });
    const isValidDate = isValid(parsedDate);
    if (isValidDate) {
      typeof setInputValue === 'function' && setInputValue(parsedDate);
      typeof onDateChange === 'function' &&
        onDateChange({
          date: parsedDate,
        });
    }
  };
  return (
    <TextInputContainer
      onClick={() => typeof setIsOpen === 'function' && setIsOpen(!isOpen)}
    >
      <TextInput
        type="text"
        inputSize="xlarge"
        label="Document expiration date"
        placeholder="Placeholder"
        value={placeholder || ''}
        onChange={onInputChange}
      />
      <DownArrow open={isOpen} />
    </TextInputContainer>
  );
};

export default Input;
