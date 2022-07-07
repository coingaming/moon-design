import {MultiSelect, Select} from '@heathmont/moon-core-tw';
import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState<string[]>([]);

  return (<div className="flex flex-col items-start gap-y-3 mb-[150px]">
      <MultiSelect
        value={value}
        label='Default'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
          { value: 'four', element: 'Four', label: 'Four' },
        ]}
        onChange={(newValue: string[]) => {
          setValue(newValue);
          console.log('Change happened - ', newValue);
        }}
        counter
      />

      <div className='mt-4'>
        <MultiSelect
          value={['one']}
          label='Preset value'
          placeholderSlot='Placeholder slot'
          options={[
            { value: 'one', element: 'One', label: 'One' },
            { value: 'two', element: 'Two', label: 'Two' },
            { value: 'three', element: 'Three', label: 'Three' },
          ]}
        />
      </div>

      <div className='mt-4'>
        <MultiSelect
          label='Custom menu width'
          placeholderSlot='Placeholder slot'
          menuWidth={20}
          options={[
            { value: 'one', element: 'One', label: 'One' },
            { value: 'two', element: 'Two', label: 'Two' },
            { value: 'three', element: 'Three', label: 'Three' },
          ]}
        />
      </div>
    </div>
  );
};

export default Example;
