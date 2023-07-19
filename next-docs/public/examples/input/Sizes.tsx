import { Input, Label } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="size-sm" size="sm">
        Small (sm)
      </Label>
      <Input type="text" size="sm" placeholder="Placeholder" id="size-sm" />
    </div>
    <div className="w-full">
      <Label htmlFor="size-md">Medium (Default: md)</Label>
      <Input type="text" placeholder="Placeholder" id="size-md" />
    </div>
    <div className="w-full">
      <Label htmlFor="size-lg">Large (lg)</Label>
      <Input type="text" size="lg" placeholder="Placeholder" id="size-lg" />
    </div>
  </div>
);

export default Example;
