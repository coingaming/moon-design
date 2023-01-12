import { Button } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Button size="xs" iconLeft={<OtherFrame />}>
      XS Button
    </Button>
    <Button size="sm" iconLeft={<OtherFrame />}>
      SM Button
    </Button>
    <Button iconLeft={<OtherFrame />}>MD Button is default</Button>
    <Button size="lg" iconLeft={<OtherFrame />}>
      LG Button
    </Button>
    <Button size="xl" iconLeft={<OtherFrame />}>
      XL Button
    </Button>
  </>
);

export default Example;
