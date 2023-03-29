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
      <Avatar imageUrl="../avatar.jpeg" size="xs" />
      <Avatar imageUrl="../avatar.jpeg" size="sm" />
      <Avatar imageUrl="../avatar.jpeg" />
      <Avatar imageUrl="../avatar.jpeg" size="lg" />
      <Avatar imageUrl="../avatar.jpeg" size="xl" />
      <Avatar imageUrl="../avatar.jpeg" size="2xl" />
    </div>
  </>
);

export default Example;
