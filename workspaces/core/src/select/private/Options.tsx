import React from 'react';
import { Listbox } from '@headlessui/react';

const Options: React.FC<{ options: any }> = ({ options }) => (
  <Listbox.Options className="absolute top-full left-0 w-full min-w-[18.75rem] max-h-[18.75rem] z-1 py-2 px-1 my-2 rounded-moon-i-md box-border bg-gohan shadow-moon-lg overflow-y-auto">
    {
      // @ts-ignore
      options.map((option) => (
        <Listbox.Option
          key={option.id}
          value={option}
          className="p-2 mb-1 last:mb-0 cursor-pointer text-moon-14 text-bulma rounded-moon-i-sm hover:bg-goku"
        >
          {option.label}
        </Listbox.Option>
      ))
    }
  </Listbox.Options>
);
export default Options;
