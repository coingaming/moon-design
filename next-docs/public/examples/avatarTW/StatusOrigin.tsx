import { Avatar } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Avatar
      isStatusActive
      statusOrigin={{ vertical: 'top', horizontal: 'right' }}
    />
    <Avatar
      isStatusActive
      statusOrigin={{ vertical: 'top', horizontal: 'left' }}
    />
    <Avatar isStatusActive />
    <Avatar
      isStatusActive
      statusOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    />
  </>
);

export default Example;
