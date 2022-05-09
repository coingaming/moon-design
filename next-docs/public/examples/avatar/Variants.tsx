import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Avatar />
    <Avatar name="JS" />
    <Avatar imageUrl="https://www.fillmurray.com/200/200" />
  </div>
);

export default Example;
