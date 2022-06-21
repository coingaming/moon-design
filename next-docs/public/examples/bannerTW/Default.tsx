import { Banner } from '@heathmont/moon-core-tw';
import { ControlsClose } from '@heathmont/moon-icons';

const Example = () => (
  <Banner
    title="Merged pull request"
    description="Pull request #9999 merged after a successful build"
    iconHeader={<ControlsClose />}
  />
);

export default Example;
