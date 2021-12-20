import { Button } from '@heathmont/moon-components';

const Example = () => (
  <div className="flex justify-around w-full">
    <Button progress variant="primary">
      Default
    </Button>
    <Button success variant="primary">
      Default
    </Button>
    <Button oops variant="primary">
      Default
    </Button>
    <Button pulse variant="primary">
      Default
    </Button>
  </div>
);

export default Example;
