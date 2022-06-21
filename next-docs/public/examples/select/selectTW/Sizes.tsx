import { Select } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="flex flex-col gap-y-3 mb-[150px] w-80">
      <Select
        label='Medium (default)'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
        ]}
        value={value}
        onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
      />

      <div className='mt-4'>
        <Select
          label='Large'
          size='lg'
          options={[
            { value: 'one', element: 'One', label: 'One' },
            { value: 'two', element: 'Two', label: 'Two' },
            { value: 'three', element: 'Three', label: 'Three' },
          ]}
          value={value}
          onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
        />
      </div>

      <div className='mt-4'>
        <Select
          label='Extra large'
          size='xl'
          options={[
            { value: 'one', element: 'One', label: 'One' },
            { value: 'two', element: 'Two', label: 'Two' },
            { value: 'three', element: 'Three', label: 'Three' },
          ]}
          value={value}
          onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
        />
      </div>
    </div>
  );
};

export default Example;
