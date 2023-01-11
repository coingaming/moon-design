import React from 'react';
import { Listbox } from '@headlessui/react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';

export type BaseOptionType = {
  id: number;
  label: string;
  value: string | number;
};

const Options: React.FC<{
  options: BaseOptionType[];
  formatOptionLabel?: (data: BaseOptionType) => JSX.Element | string;
  menuWidth?: string;
}> = ({ options, formatOptionLabel, menuWidth }) => (
  <Listbox.Options
    className={mergeClassnames(
      menuWidth ? menuWidth : 'w-full min-w-[18.75rem]',
      'max-h-[18.75rem] z-1 py-2 px-1 my-2 rounded-moon-s-md box-border bg-gohan shadow-moon-lg overflow-y-auto',
      'focus:outline-none'
    )}
  >
    {options.map((option, optionId) => (
      <Listbox.Option
        key={`${option.id}${optionId}`}
        value={option}
        className={({ active }) =>
          `p-2 mb-1 last:mb-0 cursor-pointer text-moon-14 text-bulma rounded-moon-s-sm hover:bg-goku ${
            active && 'bg-goku'
          }`
        }
      >
        {(formatOptionLabel && formatOptionLabel(option)) || option.label}
      </Listbox.Option>
    ))}
  </Listbox.Options>
);
export default Options;
