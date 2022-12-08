import { Button } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Button iconLeft={<GenericSettings className="text-moon-24" />}>
      IconLeft
    </Button>
    <Button iconRight={<GenericSettings className="text-moon-24" />}>
      IconRight
    </Button>
  </>
);

export default Example;
