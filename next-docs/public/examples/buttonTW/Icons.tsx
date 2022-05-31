import { Button } from '@heathmont/moon-core-tw';
import { GenericSettings } from "@heathmont/moon-icons";

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button iconLeft={<GenericSettings fontSize="1.5rem" />}>
      IconLeft
    </Button>
    <Button iconLeft>
      <GenericSettings fontSize="1.5rem" />
      IconLeft
    </Button>
    <Button iconRight={<GenericSettings fontSize="1.5rem" />}>
      IconRight
    </Button>
    <Button iconRight>
      IconRight
      <GenericSettings fontSize="1.5rem" />
    </Button>
    <Button iconOnly={<GenericSettings fontSize="1.5rem" />} />
    <Button iconOnly>
      <GenericSettings fontSize="1.5rem" />
    </Button>
  </div>
);

export default Example;
