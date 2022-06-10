import { Button } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Button iconLeft={<GenericSettings className="text-moon-24" />}>
      IconLeft
    </Button>
    <Button iconLeft>
      <GenericSettings className="text-moon-24" />
      IconLeft
    </Button>
    <Button iconRight={<GenericSettings className="text-moon-24" />}>
      IconRight
    </Button>
    <Button iconRight>
      IconRight
      <GenericSettings className="text-moon-24" />
    </Button>
    <Button iconOnly={<GenericSettings className="text-moon-24" />} />
    <Button iconOnly>
      <GenericSettings className="text-moon-24" />
    </Button>
  </>
);

export default Example;
