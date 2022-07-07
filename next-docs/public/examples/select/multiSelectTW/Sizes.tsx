import { MultiSelect } from '@heathmont/moon-core-tw';
import {useState} from "react";

const Example = () => {
  const [value, setValue] = useState<string[]>([]);

  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <MultiSelect
      value={value}
      label='Medium (default)'
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
      ]}
      onChange={(newValue: string[]) => {
        setValue(newValue);
        console.log('Change happened - ', newValue)
      }}
    />

    <div className='mt-4'>
      <MultiSelect
        value={value}
        label='Large'
        size='lg'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
        ]}
        onChange={(newValue: string[]) => {
          setValue(newValue);
          console.log('Change happened - ', newValue)
        }}
      />
    </div>

    <div className='mt-4'>
      <MultiSelect
        value={value}
        label='XLarge'
        size='xl'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
        ]}
        onChange={(newValue: string[]) => {
          setValue(newValue);
          console.log('Change happened - ', newValue)
        }}
      />
    </div>
  </div>);
};

export default Example;
