import Avatar from '@heathmont/moon-core-tw/lib/es/avatar/Avatar';
import { GenericUser } from '@heathmont/moon-icons-tw';

export const Active = () => (
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
