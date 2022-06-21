import { MultiSelect } from '@heathmont/moon-core-tw';
import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-y-3 mb-[150px] w-80">
      <MultiSelect
        value={value}
        size="md"
        label='Default MultiSelect md'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
          { value: 'four', element: 'Four', label: 'Four' },
        ]}
        onChange={(newValue: string[]) => { setValue(newValue); console.log('Change happened - ', newValue) }}
        counter
      />
    </div>
  );
};

export default Example;