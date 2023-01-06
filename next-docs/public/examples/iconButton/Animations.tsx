import { IconButton } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton
      animation="progress"
      icon={<GenericSettings className="text-moon-24" />}
    />
    <IconButton
      animation="success"
      icon={<GenericSettings className="text-moon-24" />}
    />
    <IconButton
      animation="error"
      icon={<GenericSettings className="text-moon-24" />}
    />
    <IconButton
      animation="pulse"
      icon={<GenericSettings className="text-moon-24" />}
    />
  </>
);

export default Example;
