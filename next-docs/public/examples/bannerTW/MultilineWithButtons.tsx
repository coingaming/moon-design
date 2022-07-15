import { Banner, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <Banner
      title="Merged pull request"
      description="Pull request #9999 merged after a successful build"
      primaryButton={<Button>View commit</Button>}
      secondaryButton={<Button variant="ghost">Discard</Button>}
    />
  );
};

export default Example;
