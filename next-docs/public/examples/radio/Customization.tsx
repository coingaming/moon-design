import { Radio } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  return (
    <>
      <Radio value={value1} onChange={setValue1} className="flex gap-4">
        <Radio.Option value="option1">
          <Radio.Indicator />
          Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator />
          Option 2
        </Radio.Option>
      </Radio>
      <Radio value={value2} onChange={setValue2}>
        <Radio.Option
          value="option1"
          className="w-48 p-2 justify-between hover:bg-gohan transition-colors rounded-moon-i-sm"
        >
          Option 1
          <Radio.Indicator />
        </Radio.Option>
        <Radio.Option
          value="option2"
          className="w-48 p-2 justify-between hover:bg-gohan transition-colors rounded-moon-i-sm"
        >
          Option 2
          <Radio.Indicator />
        </Radio.Option>
      </Radio>
      <Radio value={value3} onChange={setValue3}>
        <Radio.Option value="option1">
          <Radio.Indicator className="border-chichi" />
          Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator className="moon-checked:border-nappa after:bg-nappa" />
          Option 2
        </Radio.Option>
      </Radio>
    </>
  );
};

export default Example;
