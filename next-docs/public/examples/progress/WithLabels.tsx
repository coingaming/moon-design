import { Progress } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col w-full gap-1 text-moon-10-caption font-medium uppercase">
    <div className="flex gap-1 justify-between">
      <span>0%</span>
      <span>100%</span>
    </div>
    <Progress value={75} />
    <span className="text-center">Progress Title</span>
  </div>
);

export default Example;
