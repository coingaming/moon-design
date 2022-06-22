import { Banner } from '@heathmont/moon-core-tw';
import { ControlsClose } from '@heathmont/moon-icons';

const Example = () => (
  <Banner
    title="Merged pull request"
    description="Pull request #9999 merged after a successful build"
    iconHeader={<ControlsClose fontSize='1.5rem'/>}
  />
);

export default Example;
