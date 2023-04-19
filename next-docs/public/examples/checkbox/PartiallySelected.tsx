import { Checkbox } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  // const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(
  //   'indeterminate' as 'indeterminate'
  // );

  // console.log('allChecked', allChecked);
  // console.log('isIndeterminate', isIndeterminate);

  return (
    <div>
      <Checkbox
        checked={checkedItems.every(Boolean)}
        isIndeterminate={isIndeterminate}
        // onClick={() => setIsChecked(!isChecked)}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        label="Checked"
        // id="checked"
      />
      <div className="flex flex-row gap-4 pl-4">
        <Checkbox
          checked={checkedItems[0]}
          // onClick={() => setIsChecked(!isChecked)}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          label="Checked"
          // id="checked"
        />
        <Checkbox
          checked={checkedItems[1]}
          // onClick={() => setIsChecked(!isChecked)}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          label="Checked"
          // id="checked"
        />
      </div>
    </div>
  );
};

export default Example;
