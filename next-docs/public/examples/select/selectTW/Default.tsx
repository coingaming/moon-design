import { Select } from '@heathmont/moon-core-tw';
import {useState} from "react";

const Example = () => {
  const [value, setValue] = useState('');

  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <Select
      value={value}
      label='Default select'
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
      ]}
      onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
    />

    <div className='mt-4'>
      <Select
        value='one'
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
      <Select
        value={value}
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
  </div>);
};

export default Example;
