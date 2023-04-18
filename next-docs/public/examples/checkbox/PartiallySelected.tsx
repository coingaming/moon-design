import { Checkbox } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(
    'indeterminate' as 'indeterminate'
  );

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        onChange={() => {
          console.log('isChecked:', isChecked);
        }}
        label="Checked"
        id="checked"
      />
      <div className="flex flex-coll gap-4 pl-4">
        <Checkbox
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          onChange={() => {
            console.log('isChecked:', isChecked);
          }}
          label="Checked"
          id="checked"
        />
      </div>
    </div>
  );
};

export default Example;
