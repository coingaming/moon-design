import { Avatar } from '@heathmont/moon-core-tw';
import { GenericUser } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar size="xs">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar size="sm">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar>
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar size="lg">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar size="xl">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar size="2xl">
        <GenericUser className="text-moon-24" />
      </Avatar>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar size="xs">xs</Avatar>
      <Avatar size="sm">sm</Avatar>
      <Avatar>md</Avatar>
      <Avatar size="lg">lg</Avatar>
      <Avatar size="xl">xl</Avatar>
      <Avatar size="2xl">2xl</Avatar>
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
