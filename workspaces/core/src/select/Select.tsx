import React, { useState } from 'react';
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

type SelectProps<T> = {
  size?: 'md' | 'lg' | 'xl' | string;
  label?: JSX.Element | string;
  placeholder: JSX.Element | string;
  isError?: boolean;
  hintText?: JSX.Element | string;
  options: unknown; //TODO: set correct type for option
} & HTMLInputElement;

const Select: React.FC<SelectProps<BaseOptionType>> = ({
  label,
  placeholder,
  size = 'md',
  isError,
  hintText,
  disabled,
  options,
  ...rest
}) => {
  const [selectedPerson, setSelectedPerson] = useState<BaseOptionType>();
  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
      disabled={disabled}
    >
      {({ open }) => (
        <div
          className={classNames(disabled && 'opacity-30 cursor-not-allowed')}
        >
          <div className="relative">
            {label && size !== 'xl' && (
              <Listbox.Label className="block text-moon-16 text-bulma pb-2">
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
                {selectedPerson ? (
                  <span className="text-moon-16 text-bulma">
                    {selectedPerson?.label}
                  </span>
                ) : placeholder ? (
                  <span className="text-moon-16 text-trunks">
                    {placeholder}
                  </span>
                ) : (
                  ''
                )}
              </div>
            </InputBtn>
            {options && <Options options={options} />}
          </div>
          {hintText && <HintText isError={isError}>{hintText}</HintText>}
        </div>
      )}
    </Listbox>
  );
};

export default Select;
