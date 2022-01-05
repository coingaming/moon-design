import { Button } from '@heathmont/moon-core';
import { ControlsClose } from '@heathmont/moon-icons';

const NewButton = () => (
  <Button iconRight={<ControlsClose color="#fff" />} fullWidth>
    New Button
  </Button>
);

export default NewButton;
