import { Select } from '@heathmont/moon-core-tw';
import { ChartPieChart } from '@heathmont/moon-icons';
import {useState} from "react";

const Example = () => {
  const [value, setValue] = useState('one');

  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <Select
      value={value}
      label='Left slot'
      placeholderSlot='Placeholder slot'
      formatOptionLabel={(option: any) => (
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center mx-2">
            {!!option.data?.icon && (option.data.icon)}
            <strong className='mx-2'>{!!option.data?.label && (option.data.label)}</strong>
          </div>
          <div>
            {option.element}
          </div>
        </div>
      )}
      options={[
        { value: 'one', element: 'One', label: 'One', data: { icon: (<ChartPieChart />), label: 'Chart' } },
        { value: 'two', element: 'Two', label: 'Two', data: { icon: (<ChartPieChart />), label: 'Chart' } },
        { value: 'three', element: 'Three', label: 'Three', data: { icon: (<ChartPieChart />), label: 'Chart' } },
        { value: 'four', element: 'Four', label: 'Four', data: { icon: (<ChartPieChart />), label: 'Chart' } },
      ]}
      onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
    />

    <div className='mt-4'>
      <Select
        value={value}
        label='Left slot'
        placeholderSlot='Placeholder slot'
        size='xl'
        formatOptionLabel={(option: any) => (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center mx-2">
              {!!option.data?.icon && (option.data.icon)}
              <strong className='mx-2'>{!!option.data?.label && (option.data.label)}</strong>
            </div>
            <div>
              {option.element}
            </div>
          </div>
        )}
        options={[
          { value: 'one', element: 'One', label: 'One', data: { icon: (<ChartPieChart />), label: 'Chart' } },
          { value: 'two', element: 'Two', label: 'Two', data: { icon: (<ChartPieChart />), label: 'Chart' } },
          { value: 'three', element: 'Three', label: 'Three', data: { icon: (<ChartPieChart />), label: 'Chart' } },
          { value: 'four', element: 'Four', label: 'Four', data: { icon: (<ChartPieChart />), label: 'Chart' } },
        ]}
        onChange={(newValue: string) => { setValue(newValue); console.log('Change happened - ', newValue) }}
      />
    </div>
  </div>);
};

export default Example;
