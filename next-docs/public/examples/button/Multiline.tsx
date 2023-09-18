import { Button } from '@heathmont/moon-core-tw';

const Example = () => (
  <Button size="xl" className="py-3">
    <span className="flex flex-col gap-1">
      <span className="leading-none">Button text</span>
      <span className="text-moon-9 font-normal leading-[12px]">
        Placeholder text
      </span>
    </span>
  </Button>
);

export default Example;
