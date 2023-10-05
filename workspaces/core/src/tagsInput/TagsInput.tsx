import React, { createContext, forwardRef, useContext, useState } from "react";
import { usePopper } from "react-popper";
import { Input  as NativeInput, SelectButton, mergeClassnames } from "../index";

type Size = 'sm' | 'md' | 'lg' | 'xl';

type SelectedItemProps = {
  index: number;
  label: string;
  className?: string;
}

type TagsInputProps = {
  children?: React.ReactNode;
  selected?: string[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  type?: string;
  size?: Size;
  onEnter?: (value: string) => void;
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

type TagsInputState = {
  value?: unknown;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  onClear?: (index: number) => void;
  popper?:  {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
};

const TagsInputContext = createContext<TagsInputState>({});
TagsInputContext.displayName = 'TagsInputContext';

const useTagsInputContext = (component: string) => {
  const context = useContext(TagsInputContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <TagsInput /> component.`
    );
    throw err;
  }
  return context;
};

const TagsInputRoot = forwardRef<HTMLSpanElement, TagsInputProps>(({
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
    popper: {
        styles: styles,
        attributes: attributes,
        setAnchor: setAnchorEl,
        setPopper: setPopperEl,
    }
  }

  return (
    <TagsInputContext.Provider value={states}>
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
              && ((e.target as HTMLInputElement).value = '')
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={states.popper?.setAnchor}
        />
      </span>
    </TagsInputContext.Provider>
  );
});

const SelectedItem = ({
  className,
  index,
  label,
  ...rest
}: SelectedItemProps) => {
  const { size, disabled, isError, onClear } = useTagsInputContext('TagstInput.SelectedItem');
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

const TagsInput = Object.assign(TagsInputRoot, {
  SelectedItem,
});

export default TagsInput;
