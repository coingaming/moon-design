import { Button } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Button size="xs" iconLeft={<GenericSettings className="text-moon-16" />}>
      XS Button
    </Button>
    <Button size="sm" iconLeft={<GenericSettings className="text-moon-24" />}>
      SM Button
    </Button>
    <Button iconLeft={<GenericSettings className="text-moon-24" />}>
      MD Button is default
    </Button>
    <Button size="lg" iconLeft={<GenericSettings className="text-moon-24" />}>
      LG Button
    </Button>
    <Button size="xl" iconLeft={<GenericSettings className="text-moon-24" />}>
      XL Button
    </Button>
  </>
);

export default Example;
