import { Input, Label } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="test-1" size="sm">
        Small (sm)
      </Label>
      <Input type="text" size="sm" placeholder="Placeholder" id="test-1" />
    </div>
    <div className="w-full">
      <Label htmlFor="test-2">Medium (Default: md)</Label>
      <Input type="text" placeholder="Placeholder" id="test-2" />
    </div>
    <div className="w-full">
      <Label htmlFor="test-3">Large (lg)</Label>
      <Input type="text" size="lg" placeholder="Placeholder" id="test-3" />
    </div>
  </div>
);

export default Example;
