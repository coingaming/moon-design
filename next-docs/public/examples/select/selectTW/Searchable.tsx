import { Select } from '@heathmont/moon-core-tw';
import {useState} from "react";

const Example = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div className="flex flex-col gap-y-3 mb-[150px]">
      <Select
        value={value2}
        label='Default select'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
        ]}
        onChange={(newValue: string) => { setValue2(newValue); console.log('Change happened - ', newValue) }}
        isSearchable={true}
      />

      <div className='mt-4'>
        <Select
          value={value1}
          label='XLarge'
          size='xl'
          options={[
            { value: 'one', element: 'One', label: 'One' },
            { value: 'two', element: 'Two', label: 'Two' },
            { value: 'three', element: 'Three', label: 'Three' },
          ]}
          onChange={(newValue: string) => { setValue1(newValue); console.log('Change happened - ', newValue) }}
          isSearchable={true}
        />
      </div>
    </div>);
};

export default Example;
