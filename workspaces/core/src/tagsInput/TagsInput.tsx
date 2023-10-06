import React, { forwardRef, useState } from "react";
import { usePopper } from "react-popper";
import { Input  as NativeInput, SelectButton, mergeClassnames } from "../index";
import { TagsInputContext, useTagsInputContext } from "./private/utils/useTagsInputContext";
import { TagsInputRootProps } from "./private/types/TagsInputRootProps";
import SelectedItemProps from "./private/types/SelectedItemProps";
import getTextSizes from "./private/utils/useTextSizes";
import getTextCase from "./private/utils/useTextCase";
import { Listbox } from "@headlessui/react";

const TagsInputRoot = forwardRef<HTMLSpanElement, TagsInputRootProps>(({
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
  tagsCase,
  popper,
},
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();

  let { styles, attributes } = usePopper(anchorEl, popperEl);

  const states = {
    value: selected,
    size: size,
    disabled: disabled,
    isError: isError,
    onClear: onClear,
    tagsCase: tagsCase,
    popper: {
        styles: styles,
        attributes: attributes,
        setAnchor: setAnchorEl,
        setPopper: setPopperEl,
    }
  }

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
            'w-full flex flex-col justify-between',
            'rounded-lg py-2 px-3 bg-goku',
            states.value.length ? 'gap-y-1' : 'gap-y-0',
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
          ref={ref}
        >
          <div className='flex flex-wrap justify-start items-start gap-1'>
            {children}
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
            type={type}
            onKeyDown={(e) => {
              e.code === 'Enter'
                && (e.target as HTMLInputElement).value.length
                && onEnter
                && onEnter((e.target as HTMLInputElement).value);
              e.code === 'Enter'
                && ((e.target as HTMLInputElement).value = '');
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={states.popper?.setAnchor}
          />
        </span>
      </Listbox>
    </TagsInputContext.Provider>
  );
});

const SelectedItem = ({
  className,
  index,
  label,
  ...rest
}: SelectedItemProps) => {
  const { size, disabled, isError, tagsCase, onClear } = useTagsInputContext('TagstInput.SelectedItem');
  return (
    <span
      key={index}
      className={mergeClassnames(
        'flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center max-w-full [&>div]:max-w-full',
        getTextCase(tagsCase),
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
            onClear={() => !disabled && onClear && onClear(index)}
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

const TagsInput = Object.assign(TagsInputRoot, {
  SelectedItem,
});

export default TagsInput;
