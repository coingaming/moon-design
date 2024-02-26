import React, { forwardRef, useState } from 'react';
import { Listbox } from '@headlessui/react';
import SelectedItemProps from './private/types/SelectedItemProps';
import { TagsInputRootProps } from './private/types/TagsInputRootProps';
import getTextSize from './private/utils/getTextSize';
import getWrapperStyle from './private/utils/getWrapperStyle';
import {
  TagsInputContext,
  useTagsInputContext,
} from './private/utils/useTagsInputContext';
import { Input as NativeInput, SelectButton, mergeClassnames } from '../index';

const TagsInputRoot = forwardRef<HTMLSpanElement, TagsInputRootProps>(
  (
    {
      label,
      children,
      selected = [],
      type = 'text',
      size = 'md',
      className,
      placeholder,
      disabled,
      isError,
      onEnter,
      onClear,
      isUppercase,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const states = {
      isUppercase,
      value: selected,
      size: size,
      disabled: disabled,
      isError: isError || isInvalid,
      onClear: onClear,
    };

    const checkValidity = (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      const validity = target.validity;

      if (!target.value.length) {
        target.value = '';
        setIsInvalid(validity.valueMissing);
        return;
      }

      setIsInvalid(validity.typeMismatch ||
        validity.patternMismatch ||
        validity.tooLong ||
        validity.tooShort ||
        validity.rangeUnderflow ||
        validity.rangeOverflow ||
        validity.stepMismatch ||
        validity.badInput ||
        validity.customError);
    };

    return (
      <TagsInputContext.Provider value={states}>
        <Listbox horizontal={false}>
          {label && (
            <SelectButton.Label labelSize={size} idDisabled={disabled}>
              {label}
            </SelectButton.Label>
          )}
          <span
            tabIndex={-1}
            className={mergeClassnames(
              'w-full flex flex-col justify-between bg-goku transition-shadow',
              states.value.length && 'gap-y-1',
              isFocused
                ? 'shadow-input-focus hover:shadow-input-focus'
                : 'shadow-input hover:shadow-input-hov',
              'focus:shadow-input-focus focus:outline-none',
              'focus-visible::shadow-input-focus focus-visible::outline-none',
              getWrapperStyle(size),
              (isError || isInvalid) &&
                'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
              disabled &&
                'opacity-60 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed',
              className
            )}
            ref={ref}
          >
            <div className="flex flex-wrap justify-start items-start gap-1">
              {children}
            </div>
            <NativeInput
              className={mergeClassnames(
                'flex-grow border-0 !rounded-none bg-transparent px-0 leading-6 h-6',
                '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
                getTextSize(size)
              )}
              placeholder={placeholder}
              error={isError || isInvalid}
              disabled={disabled}
              type={type}
              onKeyDown={(e) => {
                e.code === 'Enter' && !isInvalid &&
                  !!(e.target as HTMLInputElement).value.length &&
                  onEnter &&
                  onEnter((e.target as HTMLInputElement).value);
                e.code === 'Enter' && !isInvalid &&
                  ((e.target as HTMLInputElement).value = '');
                e.code === 'Backspace' &&
                  !(e.target as HTMLInputElement).value.length &&
                  selected.length !== 0 &&
                  onClear &&
                  onClear(selected.length - 1);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onInput={(e) => checkValidity(e) }
            />
          </span>
        </Listbox>
      </TagsInputContext.Provider>
    );
  }
);

const SelectedItem = ({
  className,
  index,
  label,
  isUppercase,
  ...rest
}: SelectedItemProps) => {
  const { size, disabled, isError, onClear } = useTagsInputContext(
    'TagstInput.SelectedItem'
  );
  return (
    <div
      key={index}
      className={mergeClassnames(
        'flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center max-w-full [&>div]:max-w-full',
        className
      )}
    >
      <SelectButton
        size={size}
        isError={isError}
        idDisabled={disabled}
        {...rest}
      >
        {/* <SelectButton.Value> */}
        <SelectButton.Chip
          isUppercase={isUppercase}
          onClear={() => !disabled && onClear && onClear(index)}
        >
          <span className="break-all truncate">{label}</span>
        </SelectButton.Chip>
        {/* </SelectButton.Value> */}
      </SelectButton>
    </div>
  );
};

const TagsInput = Object.assign(TagsInputRoot, {
  SelectedItem,
});

export default TagsInput;
