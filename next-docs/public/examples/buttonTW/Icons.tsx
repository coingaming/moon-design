import { Button } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons';

const Example = () => (
  <>
    <Button iconLeft={<GenericSettings fontSize="1.5rem" />}>IconLeft</Button>
    <Button iconLeft>
      <GenericSettings fontSize="1.5rem" />
      IconLeft
    </Button>
    <Button iconRight={<GenericSettings fontSize="1.5rem" />}>IconRight</Button>
    <Button iconRight>
      IconRight
      <GenericSettings fontSize="1.5rem" />
    </Button>
    <Button iconOnly={<GenericSettings fontSize="1.5rem" />} />
    <Button iconOnly>
      <GenericSettings fontSize="1.5rem" />
    </Button>
  </>
);

export default Example;
