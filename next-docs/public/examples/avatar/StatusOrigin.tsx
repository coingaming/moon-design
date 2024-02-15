import { Avatar } from '@heathmont/moon-core-tw';
import { GenericUser } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status position={{ vertical: 'top', horizontal: 'right' }} />
    </Avatar>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status position={{ vertical: 'top', horizontal: 'left' }} />
    </Avatar>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status />
    </Avatar>
    <Avatar>
      <GenericUser className="text-moon-24" />
      <Avatar.Status position={{ vertical: 'bottom', horizontal: 'left' }} />
    </Avatar>
  </>
);

export default Example;
