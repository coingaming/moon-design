import { Avatar } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col w-full">
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar size="xsmall" />
      <Avatar size="small" />
      <Avatar />
      <Avatar size="large" />
      <Avatar size="xlarge" />
      <Avatar size="twoxlarge" />
    </div>
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar name="JS" size="xsmall" />
      <Avatar name="JS" size="small" />
      <Avatar name="JS" />
      <Avatar name="JS" size="large" />
      <Avatar name="JS" size="xlarge" />
      <Avatar name="JS" size="twoxlarge" />
    </div>
    <div className="flex justify-around items-center w-full">
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xsmall" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="small" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="large" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xlarge" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="twoxlarge" />
    </div>
  </div>
);

export default Example;
