import { Select } from '@heathmont/moon-core-tw';
import {useState} from "react";

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col gap-y-3 mb-[150px] w-80">
      <Select
        value={value}
        label='Searchable select'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
        ]}
        onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
        isSearchable
      />
    </div>);
};

export default Example;