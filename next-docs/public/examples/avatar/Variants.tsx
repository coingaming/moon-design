import { Avatar } from '@heathmont/moon-core-tw';
import { GenericUser } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Avatar>
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar>md</Avatar>
    <Avatar imageUrl="../avatar.jpeg" />
  </>
);

export default Example;
