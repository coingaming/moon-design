import { Button } from '@heathmont/moon-components';
import { NotificationsBellRinging } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button isIcon variant="primary" size="xsmall">
      <NotificationsBellRinging fontSize="1.5rem" />
    </Button>
    <Button isIcon variant="primary" size="small">
      <NotificationsBellRinging fontSize="2rem" />
    </Button>
    <Button isIcon variant="primary" size="medium">
      <NotificationsBellRinging fontSize="2.5rem" />
    </Button>
    <Button isIcon variant="primary" size="large">
      <NotificationsBellRinging fontSize="3rem" />
    </Button>
  </div>
);

export default Example;
