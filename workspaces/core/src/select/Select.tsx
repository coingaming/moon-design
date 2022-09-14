import React, { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import classNames from '../private/utils/classnames';
import HintText from './private/HintText';
import InputBtn from './private/InputBtn';
import Options from './private/Options';

export type BaseOptionType = {
  id: number;
  label: string;
  value: string | number;
};

export type SelectSize = 'sm' | 'md' | 'lg' | 'xl';
export type SelectProps<T extends readonly object[], BaseOptionType> = {
  size?: SelectSize | string;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  isError?: boolean;
  hintText?: JSX.Element | string;
  value?: BaseOptionType;
  onChange?: (value?: BaseOptionType | null) => void;
  options: T;
  formatOptionLabel?: (data?: BaseOptionType) => JSX.Element | string;
  menuWidth?: string;
  disabled?: boolean;
};

const Select: React.FC<SelectProps<BaseOptionType[], BaseOptionType>> = ({
  label,
  placeholder,
  size = 'md',
  isError,
  hintText,
  disabled,
  options,
  value,
  onChange,
  formatOptionLabel,
  menuWidth,
  ...rest
}) => {
  const [option, setOption] = useState<BaseOptionType | null>(value || null);
  const onChangeHandler = (data: BaseOptionType | null) => {
    onChange && (data ? onChange(data) : onChange(null));
    data ? setOption(data) : setOption(null);
  };

  useEffect(() => {
    value ? onChangeHandler(value) : onChangeHandler(null);
  }, [value]);


  return (
    <Listbox
      value={option}
      onChange={(data) => onChangeHandler(data)}
      disabled={disabled}
    >
      {({ open }) => (
        <div
          className={classNames(
            'w-full',
            disabled && 'opacity-30 cursor-not-allowed'
          )}
        >
          <div className="relative">
            {label && size !== 'xl' && (
              <Listbox.Label
                className={classNames(
                  'block text-bulma pb-2',
                  size === 'sm' ? 'text-moon-14' : 'text-moon-16'
                )}
              >
                {label}
              </Listbox.Label>
            )}

            <InputBtn
              size={size}
              isError={isError}
              disabled={disabled}
              open={open}
              {...rest}
            >
              <div className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
                {label && size === 'xl' && (
                  <Listbox.Label className="block text-moon-12 text-trunks">
                    {label}
                  </Listbox.Label>
                )}
                {option ? (
                  <span
                    className={classNames(
                      size === 'sm' ? 'text-moon-14' : 'text-moon-16',
                      'text-bulma'
                    )}
                  >
                    {(formatOptionLabel && formatOptionLabel(option)) ||
                      option?.label}
                  </span>
                ) : placeholder ? (
                  <span
                    className={classNames(
                      size === 'sm' ? 'text-moon-14' : 'text-moon-16',
                      'text-trunks'
                    )}
                  >
                    {placeholder}
                  </span>
                ) : (
                  ''
                )}
              </div>
            </InputBtn>
            {options && (
              <Options
                options={options}
                formatOptionLabel={formatOptionLabel}
                menuWidth={menuWidth}
              />
            )}
          </div>
          {hintText && <HintText isError={isError}>{hintText}</HintText>}
        </div>
      )}
    </Listbox>
  );
};

export default Select;
