import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Avatar />
    <Avatar isStatusActive />
    <Avatar imageUrl="https://www.fillmurray.com/200/200" />
    <Avatar imageUrl="https://www.fillmurray.com/200/200" isStatusActive />
  </div>
);

export default Example;
