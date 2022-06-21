import { Banner, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const buttons = [
    <Button variant="ghost">Discard</Button>,
    <Button>View commit</Button>,
  ];
  return (
    <Banner
      title="Merged pull request"
      description="Pull request #9999 merged after a successful build"
      buttons={buttons}
    />
  );
};

export default Example;
