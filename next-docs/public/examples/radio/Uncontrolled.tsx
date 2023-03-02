import { Radio } from '@heathmont/moon-core-tw';

const Example = () => (
  <Radio defaultValue="option2">
    <Radio.Option value="option1">
      <Radio.Indicator />
      Option 1
    </Radio.Option>
    <Radio.Option value="option2">
      <Radio.Indicator />
      Option 2
    </Radio.Option>
  </Radio>
);

export default Example;
