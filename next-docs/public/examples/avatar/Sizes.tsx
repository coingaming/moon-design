import { Avatar } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar size="xs" />
      <Avatar size="sm" />
      <Avatar />
      <Avatar size="lg" />
      <Avatar size="xl" />
      <Avatar size="2xl" />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar name="xs" size="xs" />
      <Avatar name="sm" size="sm" />
      <Avatar name="md" />
      <Avatar name="lg" size="lg" />
      <Avatar name="xl" size="xl" />
      <Avatar name="2xl" size="2xl" />
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xs" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="sm" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="lg" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xl" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="2xl" />
    </div>
  </>
);

export default Example;
