import React, { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import HintText from './private/HintText';
import InputBtn from './private/InputBtn';
import Options from './private/Options';

export type BaseOptionType = {
  id?: number;
  label: string;
  value: string | number;
};

type Placement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left';

export type SelectSize = 'sm' | 'md' | 'lg' | 'xl';
export type SelectProps<T extends readonly object[], BaseOptionType> = {
  size?: SelectSize;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  isError?: boolean;
  hintText?: JSX.Element | string;
  value?: BaseOptionType;
  onChange?: (value?: BaseOptionType) => void;
  options: T;
  formatOptionLabel?: (data?: BaseOptionType) => JSX.Element | string;
  menuWidth?: string;
  disabled?: boolean;
  position?: Placement;
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
  position = 'bottom-start',
  ...rest
}) => {
  const [option, setOption] = useState<BaseOptionType | undefined>(value);

  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const onChangeHandler = (data?: BaseOptionType) => {
    if (onChange) {
      onChange(data);
    }
    setOption(data);
  };

  useEffect(() => {
    onChangeHandler(value);
  }, [value]);

  return (
    <Listbox
      value={option}
      onChange={(data) => onChangeHandler(data)}
      disabled={disabled}
    >
      {({ open }) => (
        <div
          className={mergeClassnames(
            'w-full',
            disabled && 'opacity-60 cursor-not-allowed'
          )}
        >
          <div className="relative">
            {label && size !== 'xl' && (
              <Listbox.Label
                className={mergeClassnames(
                  'block text-bulma pb-2',
                  size === 'sm' ? 'text-moon-14' : 'text-moon-16'
                )}
              >
                {label}
              </Listbox.Label>
            )}
            <div ref={setAnchorEl}>
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
                      className={mergeClassnames(
                        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
                        'text-bulma'
                      )}
                    >
                      {(formatOptionLabel && formatOptionLabel(option)) ||
                        option?.label}
                    </span>
                  ) : placeholder ? (
                    <span
                      className={mergeClassnames(
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
            </div>
            {options && open && (
              <div
                ref={setPopperEl}
                style={styles.popper}
                {...attributes.popper}
                className="z-5 absolute"
              >
                <Options
                  options={options}
                  formatOptionLabel={formatOptionLabel}
                  menuWidth={menuWidth}
                />
              </div>
            )}
          </div>
          {hintText && <HintText isError={isError}>{hintText}</HintText>}
        </div>
      )}
    </Listbox>
  );
};

export default React.memo(Select);
