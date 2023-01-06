import { Button } from '@heathmont/moon-core';
import { GenericSettings } from '@heathmont/moon-icons';

const Example = () => (
  <>
    <Button iconLeft={<GenericSettings />}>IconLeft</Button>
    <Button iconLeft>
      <GenericSettings />
      IconLeft
    </Button>
    <Button iconRight={<GenericSettings />}>IconRight</Button>
    <Button iconRight>
      IconRight
      <GenericSettings />
    </Button>
    <Button iconOnly={<GenericSettings />} />
    <Button iconOnly>
      <GenericSettings />
    </Button>
  </>
);

export default Example;
