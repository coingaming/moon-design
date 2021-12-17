import { Button } from '@heathmont/moon-core';
import { IconProfile } from '@heathmont/moon-assets';

const NewButton = () => (
  // <Button icon="only" size="xsmall" iconSize={12} fullWidth>
  //   <IconProfile color="#000" />
  // </Button>
  <Button iconOnly={<IconProfile color="#000" />} />
);

export default NewButton;
