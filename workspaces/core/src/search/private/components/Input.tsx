import React, { forwardRef, Fragment, Ref } from "react";
import { GenericSearch } from '@heathmont/moon-icons-tw';

interface SearchProps {
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  prefix?: string[];
  value: string;
}

const Close = () => <span className="text-trunks text-sm">Clear</span>

function Input(
  { onChange, onFocus, onBlur, placeholder, prefix, value }: SearchProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="flex items-center space-x-1.5 pl-3">
      <GenericSearch className="w-6 h-6 pointer-events-none text-bulma" />

      {prefix?.length
        ? prefix.map((p) => {
          return (
            <Fragment key={p}>
              <span className="dark:text-bulma">{p}</span>
              <span className="text-bulma">/</span>
            </Fragment>
          );
        })
        : null}

      <div className="flex-1 relative">
        <input
          ref={ref}
          spellCheck={false}
          className="py-4 px-0 border-none w-full focus:outline-none focus:border-none focus:ring-0 bg-transparent placeholder-bulma text-bulma"
          onChange={(e) => {
            onChange(e.currentTarget.value);
          }}
          onFocus={(e) => {
            e.currentTarget.select();
            if (typeof onFocus === 'function') {
              onFocus();
            }
          }}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === "Escape" && value) {
              e.preventDefault();
              e.stopPropagation();
              onChange("");
            }
          }}
          id="moon-search-input"
          placeholder={placeholder}
          value={value}
          type="text"
          autoFocus

        />

        {value && (
          <button
            tabIndex={-1}
            type="button"
            className="cursor-pointer"
            onClick={() => {
              onChange("");
              const inputElement = document.getElementById(
                "moon-search-input"
              );
              if (inputElement) {
                inputElement.focus();
              }
            }}
          >
            <div className="text-trunks transition absolute right-4 top-1/2 transform -translate-y-1/2" >
              <Close />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}


export default forwardRef(Input);
