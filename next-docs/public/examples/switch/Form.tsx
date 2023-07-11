import { useState } from 'react';
import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <form action="/notification-settings" method="post">
      <Switch
        checked={state}
        onChange={setState}
        name="Notification"
        value="on"
        aria-label="Notification"
      />
    </form>
  );
};

export default Example;
