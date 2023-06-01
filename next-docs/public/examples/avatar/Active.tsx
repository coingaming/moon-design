import { Avatar } from '@heathmont/moon-core-tw';
import { GenericUser } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status />
    </Avatar>
    <Avatar>
      md
      <Avatar.Status />
    </Avatar>
    <Avatar imageUrl="../avatar.jpeg">
      <Avatar.Status />
    </Avatar>
  </>
);

export default Example;
