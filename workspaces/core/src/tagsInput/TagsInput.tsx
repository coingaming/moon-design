import React, { EventHandler, KeyboardEventHandler, SyntheticEvent, forwardRef, useEffect, useState } from "react";
import { Input  as NativeInput, SelectButton, mergeClassnames } from "../index";

type Size = 'sm' | 'md' | 'lg' | 'xl';

type SelectedItemProps = {
  index: number;
  label: string;
  className?: string;
  disabled?: boolean;
  isError?: boolean;
  size?: Size;
  onClear?: (index: number) => void;
}

type TagsInputProps = {
  selected?: string[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  type?: string;
  size?: Size;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear?: (index: number) => void;
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
};

const TagsInput = forwardRef<HTMLSpanElement, TagsInputProps>(({
  selected = [],
  type,
  size = 'md',
  className,
  placeholder,
  disabled,
  isError,
  onEnter,
  onClear,
},
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <span
      tabIndex={-1}
      className={mergeClassnames(
        'w-full flex flex-col justify-between',
        'rounded-lg py-2 px-3 bg-goku',
        selected.length ? 'gap-y-1' : 'gap-y-0',
        isFocused
          ? 'shadow-input-focus hover:shadow-input-focus'
          : 'shadow-input hover:shadow-input-hov',
        'focus:shadow-input-focus focus:outline-none',
        'focus-visible::shadow-input-focus focus-visible::outline-none',
        isError &&
          'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
        disabled &&
          'opacity-60 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed',
        className
      )}
    >
      <div className='flex flex-wrap justify-start items-start gap-1'>
        {selected.map((text, index) => {
          return <SelectedItem
                  index={index}
                  label={text}
                  size={size}
                  disabled={disabled}
                  isError={isError}
                  onClear={onClear}
                />
        })}
      </div>
      <NativeInput
        className={mergeClassnames(
          'flex-grow h-full border-0 !rounded-none bg-transparent px-0',
          '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
          getTextSizes(size),
        )}
        placeholder={placeholder}
        error={isError}
        disabled={disabled}
        type={type ? type : 'text'}
        onKeyDown={(e) => { onEnter && onEnter(e)} }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        /*ref={popper?.setAnchor}*/
      />
    </span>
  );
});

const SelectedItem = ({
  className,
  index,
  label,
  size,
  disabled,
  isError,
  onClear,
  ...rest
}: SelectedItemProps) => {

  return (
    <span
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
        <SelectButton.Value>
          <SelectButton.Chip
            onClear={() => onClear && onClear(index)}
          >
            <span
              className="break-all truncate"
            >
              {label}
            </span>
          </SelectButton.Chip>
        </SelectButton.Value>
      </SelectButton>
    </span>
  );
}

const getSizeStyles = (size?: string, innerLabel?: boolean) => {
  const isLabel = innerLabel !== undefined && innerLabel;

  return mergeClassnames(
    size === 'sm' && 'py-1.5 px-2 rounded-moon-i-xs',
    (size === 'sm' || isLabel) && 'py-2 px-3 rounded-moon-i-xs gap-x-3',
    size === 'lg' && 'py-3 px-3 rounded-moon-i-sm',
    (size === 'xl' || isLabel) && 'py-3 px-4 rounded-moon-i-sm gap-x-4'
  );
};

const getTextSizes = (size: Size = 'md') => {
  return (
    {
      sm: 'text-moon-14 leading-4',
      md: 'text-moon-16 leading-5',
      lg: 'text-moon-18 leading-5',
      xl: 'text-moon-20 leading-5',
    }[size] || 'text-moon-16 leading-5'
  );
};

export default TagsInput;
