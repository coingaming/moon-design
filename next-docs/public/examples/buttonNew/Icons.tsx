import { Button } from '@heathmont/moon-core';
import { GenericSettings } from '@heathmont/moon-icons';

const Icons = () => (
  <div className="flex justify-around w-full items-center">
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
  </div>
);

export default Icons;
